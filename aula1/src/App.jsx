import Componente from "./Componente";

function App(props) {

  console.log(props);

  return <div>
    Link para: 
    <a 
    href={props.endereco}>{props.nome}</a>

    <div>
      <Componente/>
    </div>


    </div>


}

export default App