// Variáveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("result")

// Funções
function resultadoNotaClick(event) {
    event.preventDefault()
    console.log(inputNota.value)

    //Lógica - Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado!"
    } else {
        resultado.innerHTML = "Reprovado!"
    }

    inputNota.value = ""

}


