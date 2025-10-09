import { View, StyleSheet, Text } from "react-native";
import ListaCursos from "../Components/ListaCursos";
import ListaAlunos from "../Components/ListaAlunos";
import ListaPessoas from "../Components/ListaPessoas";

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.tituloHeader}>Cursos SENAI - Nova Branch</Text>
            </View>

            <ListaPessoas />

            <View style={estilos.cursosContent}>
                <Text style={estilos.texto}> - HTML Completo</Text>
                <Text style={estilos.texto}> - Informática Básica </Text>
                <Text style={estilos.texto}> - Desenvolvimento Java </Text>
                <Text style={estilos.texto}> - Excel Básico</Text>
                <Text style={estilos.texto}> - Microsoft Power BI</Text>
            </View>

            <ListaCursos />

            <ListaAlunos />


        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#E62727",
    },
    tituloHeader: {
        whidth: "100%",
        color: "white",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 20,
        fontWeight: "bold",
    },
    cursosContent: {
        paddingTop: 25,
        paddingBottom: 25,
        width: "100%",
        backgroundColor: "#C4E1E6",
    },
    texto: {
        marginLeft: 20,
        marginBottom: 8,
        fontWeight: "bold",
        width: 350,
    }
});
