import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Image1 from "../../assets/img-1.jpg"
import Image2 from "../../assets/img-2.jpg"
import Image3 from "../../assets/img-3.jpg"
import Image4 from "../../assets/img-4.jpg"
import Image5 from "../../assets/img-5.jpg"
import Image6 from "../../assets/img-6.jpg"



export default function Sobre() {
    const info = {
        nomeApp: "Fut Popeto",
        versao: "1.0.0",
        desenvolvedor: "ZEZE"
    }


    return (
        <ScrollView>
            <View style={estilos.container}>
                <Text>Sobre</Text>

                <View style={estilos.boxImage}>
                    <Image source={Image1}
                        style={estilos.Img}
                    />

                    <Image source={Image2}
                        style={estilos.Img}
                    />

                    <Image source={Image3}
                        style={estilos.Img}
                    />
                </View>

                <View style={estilos.line} />

                <View style={estilos.boxImage}>
                    <Image source={Image4}
                        style={estilos.Img}
                    />

                    <Image source={Image5}
                        style={estilos.Img}
                    />

                    <Image source={Image6}
                        style={estilos.Img}
                    />

                </View>

                <View style={estilos.line} />
                <View style={estilos.contentBox}>
                    <Text style={estilos.titulo}>Sobre o APP</Text>

                    <View style={estilos.infoSobre}>
                        <Text style={estilos.texto}>Nome: </Text>
                        <Text style={estilos.info}>{info.nomeApp}</Text>
                    </View>

                    <View style={estilos.infoSobre}>
                        <Text style={estilos.texto}>Versão: </Text>
                        <Text style={estilos.info}>{info.versao}</Text>
                    </View>

                    <View style={estilos.infoSobre}>
                        <Text style={estilos.texto}>Desenvolvido por: </Text>
                        <Text style={estilos.info}>{info.desenvolvedor}</Text>
                    </View>


                    <Text style={estilos.textoSobre}>Texto Sobre</Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu cursus nisi. Donec facilisis sit amet nulla sit amet hendrerit. Proin commodo ante eget finibus tincidunt. Vestibulum venenatis iaculis risus, id venenatis eros feugiat id. Etiam scelerisque dapibus metus elementum convallis. Duis non nisi at erat pharetra consectetur vitae quis nisi. Aliquam accumsan, nunc et iaculis efficitur, nibh leo accumsan tellus, in condimentum nisl lacus nec ipsum. Etiam aliquet, nulla non finibus blandit, est tellus consequat urna, auctor interdum eros enim nec nulla. Aliquam vel ante est. Nulla ac imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eget faucibus ipsum. Vestibulum varius libero sit amet erat egestas egestas. Praesent elementum commodo mi, porttitor euismod ex laoreet sed.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    Img: {
        width: 110,
        height: 110,
        margin: 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "orange",
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: "#ccc",
        marginVertical: 10,
    },
    boxImage: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    },
    contentBox: {
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        padding: 20,
        borderRadius: 40,
        shadowColor: "#FF9013",
        shadowOpacity: 10,
        elevation: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    infoSobre: {
        flexDirection: "row",
    },
    texto: {
        fontWeight: "bold",
        fontSize: 15,
    },
    info: {
        marginLeft: 8,
        color: "blue",
    },
    textoSobre:{
        fontWeight: "bold",
        fontSize: 15,
        width:"100%",
        borderWidth:1,
    }
})