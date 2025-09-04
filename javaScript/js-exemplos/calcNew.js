// let a = Number(prompt("Digite uma mensagem: "))

// console.log(typeof a)

//Funções
function somar(iden, num1, num2) {
    console.log(iden, num1 + num2)
}

//sub
function sub(iden, num1, num2) {
    console.log(iden, num1 - num2)
}

//mult
function mult(iden, num1, num2) {
    console.log(iden, num1 * num2)
}

//div
function div(iden, num1, num2) {
    console.log(iden, num1 / num2)
}

function chamando() {
    let a = Number(prompt("Digite um número: "))
    let b = Number(prompt("Digite outro: "))


    console.log("A soma dos números é: ", a + b)

}

//Imprimir funções
somar("Soma ", 10, 10)
sub("Sub ", 10, 20)
mult("Mult ", 30, 10)
div("Div", 40, 10)
chamando()


