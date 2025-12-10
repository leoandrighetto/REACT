import { useState } from 'react'
import bomAtivado from './assets/bomAtivado.png'
import bomDesativado from './assets/bomDesativado.png'
import neutroAtivado from './assets/neutroAtivado.png'
import neutroDesativado from './assets/neutroDesativado.png'
import ruimAtivado from './assets/ruimAtivado.png'
import ruimDesativado from './assets/ruimDesativado.png'

export default function ItemAvaliado(props) {

    const [bom, setBom] = useState(false);
    const [neutro, setNeutro] = useState(false);
    const [ruim, setRuim] = useState(false);

    function clicar(imagem) {

        if (imagem === "bom") {
            setBom(!bom);
            if (!bom) { props.onGravar('ligado', props.indice, 5) }
            else { props.onGravar('desligado', props.indice, 0) }
            setNeutro(false)
            setRuim(false)
        }
        if (imagem === "neutro") {
            setNeutro(!neutro);
            if (!neutro) { props.onGravar('ligado', props.indice, 3) }
            else { props.onGravar('desligado', props.indice, 0) }
            setBom(false)
            setRuim(false)
        }
        if (imagem === "ruim") {
            setRuim(!ruim);
            if (!ruim) { props.onGravar('ligado', props.indice, 0) }
            else { props.onGravar('desligado', props.indice, 0) }
            setNeutro(false)
            setBom(false)
        }
    }

    return <>
        <img src={!bom ? bomDesativado : bomAtivado} onClick={() => clicar("bom")} />
        <img src={!neutro ? neutroDesativado : neutroAtivado} onClick={() => clicar("neutro")} />
        <img src={!ruim ? ruimDesativado : ruimAtivado} onClick={() => clicar("ruim")} />
    </>

}