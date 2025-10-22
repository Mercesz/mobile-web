import { useState } from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native'
import axios from 'axios'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [tel, setTel] = useState('')

    const enviarContato = async () => {
        if (!nome || !tel) {
            Alert.alert("Erro", "por favor, preencha todos os campos")
            return false
        }

        const novoContato = { nome, telefone }
        axios
            .post(`http://localhost:3000/contatos`, novoContato)

    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.label}>Nome: </Text>

            <TextInput
                placeholder='Digite o nome'
                style={estilos.input}
                value={nome}
                onChange={setNome}
            />

            <Text style={estilos.label}>Tel: </Text>

            <TextInput
                placeholder='Digite o telefone'
                style={estilos.input}
                value={tel}
                onChange={setTel}
            />

            <Button title='Cadastrar' onPress={enviarContato} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        borderWidth: 2,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: "#FFF",
    }
})