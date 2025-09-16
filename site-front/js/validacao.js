const form = document.getElementById("newForm")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = document.querySelector("#email").value.trim() 

    if (email == "") {
        alert("Por favor, insira um e-mail")
        return false
    } else {
        console.log(email)
    }
    console.log(email)

    //Limpa o campo
    form.reset()
    
})
