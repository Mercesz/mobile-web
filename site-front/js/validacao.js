const form = document.getElementById("newForm")
const msg = document.getElementById("msg-email")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = document.querySelector("#email").value.trim()

    if (email == "") {
        alert("Por favor, insira um e-mail")
        return false
    } else {
        console.log(email)
    }

    // Validação simples:tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido. Tente novamente")
        msg.innerHTML = "Email inválido"
        return false
    }

    alert("Email cadastrado com sucesso! ✅ ")
    msg.innerHTML = "Sucesso! ✅"


    //Limpa o campo
    form.reset()

})
