import { Text, View, StyleSheet } from "react-native";

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
        <View style={estilos.container}>
            <Text style={estilos.titulo}>LIsta de Pessoas</Text>

            {pessoas.map((pessoa) => (
                <View style={estilos.card}>
                    <Text>Nome: {pessoa.nome}  •  </Text>
                    <Text>Idade: {pessoa.idade} Anos</Text>
                </View>
            ))}

        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 40,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    card: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'red',
        marginBottom: 10,
        padding: 10,
        width: '100%',
    }
})