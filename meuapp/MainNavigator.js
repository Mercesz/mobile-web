import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Telas/Home';
import Sobre from './src/Telas/Sobre'
import FAQ from './src/Telas/FAQ'
import ListaContatos from './src/Telas/ListaContatos';
import ListaPerguntas from './src/Telas/ListaPerguntas';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="FAQ" component={FAQ} />
                <Stack.Screen name="ListaContatos" component={ListaContatos} />
                <Stack.Screen name="ListaPerguntas" component={ListaPerguntas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
