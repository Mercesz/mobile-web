import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Card'


export default function Home() {
    const navigation = useNavigation()
    return (
        <View>
            <Card
                title="Sobre"
                content="Saiba mais osbre nós e nossos serviços."
                textButton="Ir para sobre*"
                onPress={
                    () => navigation.navigate('Sobre')
                }
            />

            <Card
                title="FAQ"
                content="Saiba mais FAQ"
                textButton="Ir para FAQ"
                onPress={
                    () => navigation.navigate('FAQ')
                }
            />

            <Card
                title="Lista Contatos"
                content="Lista de contatos cadastrados"
                textButton="Ir para Listar Contatos"
                onPress={
                    () => navigation.navigate('ListaContatos')
                }
            />

        </View>
    )
}
