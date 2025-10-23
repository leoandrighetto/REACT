import { useState } from "react";
import adicionar from "./assets/adicionar.png"
import remover from "./assets/remover.png"

export default function Tecla(props) {

    const [valor, setValor] = useState(0)


    const aumentar = () => {
        let novoValor = valor;
        setValor(novoValor < 9 ? novoValor + 1 : 0);
        props.onChange = novoValor;

    }

    const diminuir = () => {
        let novoValor = valor;
        setValor(novoValor > 0 ? novoValor - 1 : 9);
        props.onChange = novoValor;

    }


    return <>


        <div style={{ display: 'flex', fontSize: '30pt', alignItems: 'center', gap: '20px' }}>

            <img onClick={() => diminuir()} src={remover} /> {valor} <img onClick={() => aumentar()} src={adicionar} />

        </div>

    </>
}