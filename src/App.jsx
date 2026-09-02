
function App() {

  let nome = "Naju"
  let sobrenome = "Vieira"
  let nome_completo = nome + " " + sobrenome

  let cliques = 0 // comando do react que monitora a variável para quando ela precisa ser renderizada/atualizada
  // cliques += useState(0)

  function aumentarClique(){
    cliques += 1
    
  }

  return (
    <div>
      <h1>Olá mundo!</h1>
      <p>Estou aprendendo React C:</p>
      <p>Meu nome é {nome_completo}.</p>

      <hr />

      <p>Você clicou {cliques} vezes.</p>
      <button onClick={aumentarClique}>Clique aqui!</button>

    </div>
  )
}

export default App
