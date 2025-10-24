import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function FAQ() {

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  const enviarDuvida = async () => {
    if (!nomeCompleto || !email || !assunto || !mensagem) {
      Alert.alert("Erro", "por favor, preencha todos os campos")
      return
    }

    const novaDuvida = { nomeCompleto, email, assunto, mensagem }

    axios.post(`http://10.0.2.2:3000/faqCadastro`, novaDuvida)
      .then(res => {
        if (res.status === 201) {
          setNomeCompleto('')
          setEmail('')
          setAssunto('')
          setMensagem('')
        } else {
          Alert.alert("Erro", "falha ao adicionar Dúvida")
        }
      })
  }

  const navigation = useNavigation();

  const irParaPágina = () => {
    navigation.navigate('ListaPerguntas')
  }

  return (
    <ScrollView>
      <View style={estilos.box}>
        <View style={estilos.container}>
          <Text style={estilos.title}>Dúvidas? Encaminhe uma mensagem a nós</Text>
        </View>

        <View>
          <Text style={estilos.info}>Nome Completo</Text>

          <TextInput style={estilos.input}
            placeholder='Digite o nome'
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
          />
        </View>

        <View>
          <Text style={estilos.info}>E-mail</Text>

          <TextInput style={estilos.input}
            placeholder='Digite o seu email'
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={estilos.info}>Assunto</Text>

          <TextInput style={estilos.input}
            placeholder='Digite o Assunto'
            value={assunto}
            onChangeText={setAssunto}
          />
        </View>

        <View>
          <Text style={estilos.info}>Mensagem</Text>

          <TextInput style={estilos.msg}
            placeholder='Digite sua Dúvida'
            value={mensagem}
            onChangeText={setMensagem}
          />

        </View>

        <View style={estilos.botaoContainer}>
          <View style={estilos.contentBotao}>
            <TouchableOpacity onPress={enviarDuvida} style={estilos.botao}>
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
