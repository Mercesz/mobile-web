import { useEffect, useState } from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function ListaContatos() {
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor
    const listaContatos = () => {
        axios
            .get("http://192.168.3.15:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error)
            })
    }

    //  Função para excluir um contato
    const deleteContato = (id) => {
        axios
            .delete(`http://192.168.3.15:3000/contatos/${id}`)
            .then(() => {
                //Atualizar lista de contato
                setContatos(contatos.filter((contato) => contato.id !== id))
                Alert.alert("Sucesso", "Contato Excluído com sucesso")
            })
            .catch((error) => {
                console.log("Erro ao excluir contato", error)
                Alert.alert("Erro ao excluir")
            })
    }

    // Use o useEffectc para buscar dados
    useEffect(() => {
        listaContatos()
    }, [])

    return (
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Lista de Contatos</Text>
                {contatos.length > 0 ? (
                    contatos.map((contato, index) => (
                        <View key={index} style={estilos.box}>

                            <View style={estilos.contentBox}>
                                <Text style={estilos.dados}>🕴 Nome: </Text>
                                <Text style={estilos.result}>{contato.nome} </Text>
                            </View>

                            <View style={estilos.contentBox}>
                                <Text style={estilos.dados}>📞 Tel: </Text>
                                <Text style={estilos.result}>{contato.telefone}</Text>
                            </View>

                            <Button
                                color="red"
                                title='Excluir'
                                onPress={() => deleteContato(contato.id)} />
                        </View>
                    ))
                ) : (
                    <Text >Nenhum contato disponível</Text>
                )
                }
            </View >
        </ScrollView>
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
        shadowOpacity: 0.9,
        elevation: 2,
    },
    titulo: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    box: {
        margin: 10,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        padding: 20,
        borderRadius: 15,
        shadowColor: "#12539eff",
        shadowOpacity: 0.9,
        elevation: 8,
    },
    contentBox: {
        flexDirection: "row",
        marginBottom: 10,
        width: 300,
    },
    dados: {
        fontWeight: "bold",
        fontSize: 15,
        marginRight: 15,
        width: 90
    },
    result: {
        textAlign: "center",
        width: "65%",
        textAlign: "center"
    }
})