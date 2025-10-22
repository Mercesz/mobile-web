import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import interrogacao from '../../assets/interrogacao.png'

export default function ListaPerguntas() {

  const [faq, setFaq] = useState([])

  const listaFaq = () => {
    axios
      .get("http://10.0.2.2:3000/faq")
      .then((res) => {
        setFaq(res.data)
      })
      .catch((error) => {
        console.error("Erro ao buscar Perguntas", error)
      })
  }

  useEffect(() => {
    listaFaq()
  }, [])

  return (
    <ScrollView>
      <View style={estilos.container}>

        <Text style={estilos.titulo}> Pergunta Frequentes</Text>

        <View style={estilos.boxImage}>
          <Image
            source={interrogacao}
            style={estilos.img}
          />
        </View>

        {faq.length > 0 ? (
          faq.map((fa, index) => (

            <View key={index} style={estilos.box}>
              <Text style={estilos.pergunta}>{fa.pergunta}</Text>
              <Text style={estilos.resposta}>{fa.resposta}</Text>
            </View>
          ))
        ) : (
          <Text>Nenhuma pergunta encontrada</Text>
        )}
      </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  container: {
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
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    margin: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#12539eff",
    shadowOpacity: 0.9,
    elevation: 8,
  },

  boxImage: {
    width: "100%",
    alignItems: "center",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
    shadowColor: "red",
    elevation: 0.9,
  },

  pergunta: {
    backgroundColor: "#59AC77",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    borderRadius: 15,
  },
  resposta: {
    margin: 5,
    backgroundColor: "#F87B1B",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    borderRadius: 15,
  }
})