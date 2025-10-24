import React from 'react'
import { Text, View, StyleSheet, Image } from "react-native"
import bolaFutebol from "../../assets/bolaDeFutebol.jpg"

export default function Header() {
    return (
        <View style={estilos.topo}>
            <Text style={estilos.tituloHeader}> ⚽  Fut Popeto</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: "#d7d7de",
        borderBottomColor: "#5c5c5fff",
        borderBottomWidth: 3,
    },
    tituloHeader: {
        width: "100%",
        textAlign: "center",
        color: "#ff7b00ff",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 45
    },
    icon: {
        height: 100,
        width: 100,
    }
})