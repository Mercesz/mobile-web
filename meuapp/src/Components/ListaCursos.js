import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaCursos() {

    const data = ["React Native", "Node.js", "MongoDB", "HTML Popeto", "Express", "C#"];
    return (
        <View style={estilos.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={estilos.lastItem}>
                        <Text style={estilos.bullet}>• </Text>
                        <Text style={estilos.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    lastItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        padding: 8,
        backgroundColor: "#DDE6ED",
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        elevation: 3,
    },
    bullet: {
        fontSize: 20,
        marginRight: 8,
    },
    text: {
        fontSize: 16,
    }
});
