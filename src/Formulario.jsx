import { useState } from "react"


function Formulario() {

    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [cidade, setCidade] = useState("")
    let [estado, setEstado] = useState("")

    function salvar() {

        if (nome.length < 3 || nome == 0) {
            alert("Nome inválido, tente novamente.")
        } else if (idade == 0) {
            alert("Idade inválida, tente novamente.")
        } else if (cidade == 0) {
            alert("Cidade inválida, tente novamente.")
        } else if (estado == 0) {
            alert("Estado inválido, tente novamente.")
        } else {
            alert("Seja bem vindo(a), " + nome + "! Você tem " + idade + " anos e mora em " + cidade + " - " + estado + ".")
        }

    }

    return (
        <div>
            <h1>Página de Formulário</h1>
            <p>Aprendendo a usar o Input no React</p>

            <p>Digite seu nome: </p>
            <input onChange={e => setNome(e.target.value)} />
            <br /><br />


            <p>Digite sua idade: </p>
            <input type="number" onChange={e => setIdade(e.target.value)} />
            <br /><br />


            <p>Digite onde mora: </p>
            <input onChange={e => setCidade(e.target.value)} />
            <input onChange={e => setEstado(e.target.value)} />
            <br /><br />
            <button onClick={salvar}>Salvar</button>

        </div>
    )
}

export default Formulario