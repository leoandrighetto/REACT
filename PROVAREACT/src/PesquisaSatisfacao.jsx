import { useState } from 'react'
import ItemAvaliado from './ItemAvaliado'
import bomAtivado from './assets/bomAtivado.png'
import neutroAtivado from './assets/neutroAtivado.png'
import ruimAtivado from './assets/ruimAtivado.png'

export default function PesquisaSatisfacao(props) {

    const [validar, setValidar] = useState([0, 0, 0]);
    const [pontos, setPontos] = useState([])
    const [media, SetMedia] = useState(0);
    const [mostrarItens, setMostrarItens] = useState(true);
    const [mostrarTelaFinal, setMostrarTelaFinal] = useState(false);

    function Finalizar() {

        let verificar = validar.some(e => e === 0);

        if (verificar) {

            alert("Avalie todos os itens por favor.")


        } else {
            setMostrarTelaFinal(true);
            setMostrarItens(false)

            let calc = pontos.reduce((a, p) => {
                return a + p
            }, 0)

            let m = calc / pontos.length;

            SetMedia(m.toFixed(2));

        }
    }

    function gravar(sta, i, valor) {

        let v = [...validar];
        let p = [...pontos];

        p[i] = valor;

        if (sta === 'ligado') {

            v[i] = 1;

        } else {

            v[i] = 0;

        }
        setPontos(p);
        setValidar(v);

    }

    return <>
        {!mostrarTelaFinal ?
            <h1>Pesquisa de Satisfação</h1> :
            <h1>Obrigado Por Responder!</h1>}
        <br /><br />

        {mostrarItens ? props.itens.map((item, i) =>

            <div style={{ fontSize: '15pt', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif" }} key={i}>

                {item}

                <br /><br />
                <ItemAvaliado
                    indice={i}
                    onGravar={gravar}
                />

            </div>) : null}


        {!mostrarTelaFinal ? <button onClick={() => Finalizar()}>FINALIZAR</button> :

            <div>
                Média: {media}
                <br /><br />
                {media >= 4.0 ? <img src={bomAtivado} /> :
                    media >= 2.0 && media < 4.0 ? <img src={neutroAtivado} /> :
                        media < 2.0 ? <img src={ruimAtivado} /> : null}
                <br /><br />
                <button onClick={()=>{
                    setValidar([0,0,0]);
                    setPontos([]);
                    SetMedia(0);
                    setMostrarItens(true);
                    setMostrarTelaFinal(false);

                }}>Nova Pesquisa</button>
            </div>
        }
    </>

}