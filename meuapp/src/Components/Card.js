import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Card() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cardTitle}>Sobre</Text>
            <Text style={estilos.cardContent}>Saiba mais sobre nós</Text>
            <Button
                title='Ir para Sobre'
                onPress={() => alert("Botão Pressionado")}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        borderRadius: 1.41,
        shadowColor: "orange",
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        margimBottom: 10,
        fontFamily: 'Forte',

    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10
    }
});
