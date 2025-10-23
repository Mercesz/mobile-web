import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'

export default function Card(props) {
    return (
        <ScrollView>
            <View style={estilos.container}>
                <Text style={estilos.cardTitle}>{props.title}</Text>
                <Text style={estilos.cardContent}>{props.content}</Text>

                <View style={estilos.containerButton}>
                    <TouchableOpacity onPress={props.onPress} style={estilos.button}>
                        <Text style={estilos.titleButton}>{props.textButton}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        borderRadius: 14,
        shadowColor: "blue",
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        margimBottom: 10,
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10
    },
    containerButton: {
        alignItems: "center"
    },
    button: {
        backgroundColor: "#F87B1B",
        padding: 10,
        borderRadius: 15,
        alignItems: "center",
        width: 200,
        elevation: 2,
        borderColor: "#F8F3D9"
    },
    titleButton: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
});
