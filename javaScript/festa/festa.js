let idade = document.getElementById("idade")
let result = document.getElementById("result")

function verificaIdade(event) {

    event.preventDefault()

    console.log(idade.value)

    if (idade.value == "") {
        alert("Digite o valor ")
    }
    if (idade.value >= 18) {
        result.innerHTML = 'Pode ir a festa 🎉'
    } else {
        result.innerHTML = 'Menor de idade, não pode ir a festa 🚫'
    }

    idade.value = ""
}