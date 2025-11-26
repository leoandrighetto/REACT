import './App.css'

import Produtos from './db'
//importar a FUNÇÃO que está na pasta db, e não a PASTA INTEIRA
function App() {

  return (
    <>
      <Produtos/>
    </>
  )
}

export default App

// Salve o arquivo baseContatos.json na pasta raiz do seu projeto.

// Instale o json-server globalmente com npm install -g json-server ou localmente com npm install json-server --save-dev.

// Inicie o json-server com o comando npx json-server ./baseContatos.json.

// Verifique a API acessando http://localhost:3000/contatos no navegador.

//Integre no React utilizando axios para buscar os dados e exibi-los no frontend.
