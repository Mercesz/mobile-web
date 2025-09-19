import { Fragment } from "react";


const Contador = () => {

    const aumentar = () => {
        alert("Olá Rodriguinho")
    }

    const diminuir = () => {
        alert("Olá Diminuir")
    }

    return (
        <Fragment>
            <h1>Contador</h1>


            <section>
                <h2>Resultado</h2>
                <button onClick={aumentar} style={{ marginRight: '10px' }}>Aumentar</button>
                <button onClick={diminuir}>Dimunuir</button>
            </section>
        </Fragment>
    )
}

export default Contador;