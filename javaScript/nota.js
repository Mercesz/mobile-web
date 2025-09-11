// Variáveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("result")
const message = document.getElementById("message")

// Funções
function resultadoNotaClick(event) {
    event.preventDefault()
    console.log(inputNota.value)

    if (inputNota.value == "") {
        message.style.display = "block"
        return false
    }

    message.style.display = "none"

    //Lógica - Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado!"
    } else {
        resultado.innerHTML = "Reprovado!"
    }

    inputNota.value = ""
}


