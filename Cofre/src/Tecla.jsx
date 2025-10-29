import { useState } from "react"
import adicionar from './assets/adicionar.png';
import remover from './assets/remover.png';
import proibido from './assets/proibido.png';

export default function Tecla({ id }){

    id = id;

    console.log(Tecla.id)

    const [contador,setContador] = useState(1);

    return<>
        
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>

            <img src={ contador === 9 ? proibido : adicionar} id= {id} onClick={()=> contador >= 9 ? undefined : setContador(contador + 1)}/>
            {contador}
            <img src={contador === 0 ? proibido : remover} id= {id} onClick={()=> contador <= 0 ? undefined : setContador(contador - 1)}/>

        </div>
    </>

}