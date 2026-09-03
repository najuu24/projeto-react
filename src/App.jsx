import { useState } from "react"

function App() {
  // useState(0): comando do react que monitora a variável para quando ela precisa ser renderizada/atualizada



  let [cliques, setCliques] = useState(0)
  let [meuNome, setNome] = useState("Aguardando...")
  
  

  let nome = "Naju"
  let sobrenome = "Vieira"
  // let nome_completo = nome + " " + sobrenome


  // function aumentarClique(){
  //   setCliques(cliques + 1)
  // }

  return (
    <div>
      <h1>Olá mundo!</h1>
      <p>Estou aprendendo React C:</p>
      <p>Meu nome é: {meuNome}</p>
      <button onClick={ () => setNome(nome)}>Carregar nome</button>

      <br />
      <br />

      <p>Você clicou {cliques} vezes.</p>
      <button onClick={ () => setCliques(cliques + 1)}>Clique aqui!</button>

      <hr />

    </div>
  )
}

export default App
