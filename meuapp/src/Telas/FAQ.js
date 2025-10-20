import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function FAQ() {
  const navigation = useNavigation();

  const irParaPágina = () => {
    navigation.navigate('ListaPerguntas')
  }

  const handlePress = () => {
    alert('Dúvida encaminhada!');
  };

  return (
    <ScrollView>
      <View style={estilos.box}>
        <View style={estilos.container}>
          <Text style={estilos.title}>Dúvidas? Encaminhe uma mensagem a nós</Text>
        </View>

        <View>
          <Text style={estilos.info}>Nome Completo</Text>

          <TextInput style={estilos.input} />
        </View>

        <View>
          <Text style={estilos.info}>E-mail</Text>

          <TextInput style={estilos.input} />
        </View>

        <View>
          <Text style={estilos.info}>Assunto</Text>

          <TextInput style={estilos.input} />
        </View>

        <View>
          <Text style={estilos.info}>Mensagem</Text>

          <TextInput style={estilos.msg} />
        </View>

        <View style={estilos.botaoContainer}>
          <View style={estilos.contentBotao}>
            <TouchableOpacity onPress={handlePress} style={estilos.botao}>
              <Text style={estilos.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={irParaPágina} style={estilos.botaoPergunta}>
              <Text style={estilos.botaoTexto}>Perguntas Frequentes</Text>
            </TouchableOpacity>
          </View>
        </View >
      </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 20,
    borderRadius: 40,
    shadowColor: "#FF9013",
    shadowOpacity: 0.9,
    elevation: 2,
  },
  container: {
    width: "100%",
    borderBottomWidth: 1,
    backgroundColor: "black",
  },

  title: {
    margin: 20,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  info: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
  msg: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 8,
    height: 150,
  },

  botaoContainer: {
    alignItems: 'flex-end'
  },
  contentBotao: {
    flexDirection: "row",
  },
  botao: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    width: 110,
  },
  botaoPergunta: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    width: 200,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
