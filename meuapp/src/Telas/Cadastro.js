import { useState } from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const navigation = useNavigation()

    const enviarContato = async () => {
        if (!nome || !telefone) {
            Alert.alert("Erro", "por favor, preencha todos os campos")
            return
        }

        const novoContato = { nome, telefone }

        axios.post(`http://10.0.2.2:3000/contatos`, novoContato)
            .then(resposta => {
                if (resposta.status === 201) {
                    setNome('')
                    setTelefone('')
                    navigation.navigate('ListaContatos')
                } else {
                    Alert.alert("Erro", " falha ao adicionar contato")
                }
            })
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.label}>Nome: </Text>

            <TextInput
                placeholder='Digite o nome'
                style={estilos.input}
                value={nome}
                onChangeText={setNome}
            />

            <Text style={estilos.label}>Tel: </Text>

            <TextInput
                placeholder='Digite o telefone'
                style={estilos.input}
                value={telefone}
                onChangeText={setTelefone}
            />

            <Button title='Cadastrar' onPress={enviarContato} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        padding: 20,
        borderRadius: 40,
        shadowColor: "#FF9013",
        shadowOpacity: 0.9,
        elevation: 2,
        height: 300,
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