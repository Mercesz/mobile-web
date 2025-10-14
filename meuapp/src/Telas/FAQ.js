import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'

export default function FAQ() {
  const handlePress = () => {
    alert('Dúvida encaminhada!');
  };

  return (
    <>
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
        <View>
          <TouchableOpacity onPress={handlePress} style={estilos.botao}>
            <Text style={estilos.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View >
    </>
  )
}

const estilos = StyleSheet.create({
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
  botao: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    width: 150,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
