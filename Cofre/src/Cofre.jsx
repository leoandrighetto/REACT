import { useState } from "react";
import Tecla from "./Tecla"

export default function Cofre({senha}){
    
    const senhaNumerica = senha.split("").map(n => Number(n)); 
    console.log(senhaNumerica);

    const [senhaTeclada,setSenhaTeclada] = useState([0,0,0]);

    const tecla1 = (contador) => {setSenhaTeclada(senhaTeclada[0] = contador,...senhaTeclada)}
    const tecla2 = (contador) => {setSenhaTeclada(...senhaTeclada,senhaTeclada[1] = contador)}
    const tecla3 = (contador) => {setSenhaTeclada(...senhaTeclada,senhaTeclada[2] = contador)}

    console.log(senhaTeclada)

    return (
        <>

        <Tecla onGuardar={tecla1}/>
        <Tecla onGuardar={tecla2}/>
        <Tecla onGuardar={tecla3}/>

        <br />
        <br />

        <button>Abrir</button>

       
        </>
  )


}