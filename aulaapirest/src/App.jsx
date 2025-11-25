// Salve o arquivo baseContatos.json na pasta raiz do seu projeto.

// Instale o json-server globalmente com npm install -g json-server ou localmente com npm install json-server --save-dev.

// Inicie o json-server com o comando npx json-server ./baseContatos.json.

// Verifique a API acessando http://localhost:3000/contatos no navegador.

//Integre no React utilizando axios para buscar os dados e exibi-los no frontend.


import './App.css'
import Contatos from './contatos'

function App() {

  return (
    <>
      <Contatos/>
    </>
  )
}

export default App
