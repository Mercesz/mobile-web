import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Error ao buscar contatos", error)
            })
    }

    // Use o useEffectc para buscar dados
    useEffect(() => {
        listaContatos()
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Lista de Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View key={index} style={estilos.box}>
                        <Text style={estilos.}>Nome: </Text>
                        <Text >{contato.nome} ççç</Text>
                        <Text>Telefone: </Text>
                        <Text>{contato.telefone}</Text>
                    </View>
                ))
            ) : (
                <Text >Nenhum contato disponível</Text>
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        padding: 20,
        borderRadius: 40,
        shadowColor: "#FF9013",
        shadowOpacity: 10,
        elevation: 10,
    },
    titulo: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    box: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
        margin: 8,
        alignItems: "center"
    },

})