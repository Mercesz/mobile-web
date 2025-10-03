import { Text, View } from "react-native";

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome: 'Juliana',
            idade: 20,
        },
        {
            id: 2,
            nome: 'Caio',
            idade: 40,
        },
        {
            id: 3,
            nome: 'Edu',
            idade: 18,
        },
        {
            id: 4,
            nome: 'Brian',
            idade: 25,
        }
    ];

    return (
        <View>
            <Text>Teste Testes</Text>
        </View>
    )
}
