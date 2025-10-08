/*

export default function Questao (props) {
    const pergunta = props.pergunta;
    const resposta = props.resposta;

  }

*/

/*
export default function Questao ({pergunta,resposta}) {

    return <div>
        <h2>P e r g u n t a </h2>
        <button> S I M </button> <button> N Ã O </button>
    </div>

}
*/

export default function Questao ({pergunta,resposta}) {

    function Verificar(resposta){
        if (resposta == resposta){
            alert("Acertou!")}
            else{
                alert("Errou")
            }
        }

    // const clicarSim = () => Verificar("sim");
    // const clicarNao = () => Verificar("não");    
        
    return <div>
        <h2>P e r g u n t a: {pergunta}</h2>
        <button onClick = {() => Verificar("sim")}> S I M </button> <button onClick={() => Verificar("não")}> N Ã O </button>
    </div>

}


