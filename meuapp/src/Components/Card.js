import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Card() {
    const navigation = useNavigation()

    return (
        <View style={estilos.container}>
            <Text style={estilos.cardTitle}>Sobre</Text>
            <Text style={estilos.cardContent}>Saiba mais sobre nós</Text>
            <Button
                title='Ir para Sobre'
                onPress={
                    () => navigation.navigate('Sobre')
                }
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
