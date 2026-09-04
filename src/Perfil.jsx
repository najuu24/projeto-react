import { useState } from "react"

function Perfil() {

    let usuario = {
        nome: "Naju",
        email: "naju@gmail.com",
        senha: "123123"
    }

    let [exibindoPerfil, setExibindoPerfil] = useState(false)

    let [alteraSenha, setAlteraSenha] = useState(0)

    return (
        <div>
            <h1>Perfil de usuário</h1>
            <p>Veja aqui suas informações do perfil</p>
            <button onClick={ () => setExibindoPerfil(! exibindoPerfil) }>Carregar Perfil</button>

            <hr />

            {
                exibindoPerfil == true ?  
                <div>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                    <button>Alterar senha</button>
                </div>
            : 
            <p></p>
            }

            {/* <hr /> */}

        </div>
    )
}

export default Perfil