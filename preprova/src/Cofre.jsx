import Tecla from "./Tecla";

export default function Cofre(props) {

    return <>

        <div style={{ display: "block", marginBottom: '30px', fontSize: '30pt', padding: '40px' }}>

            senha informada = {props.senha}

            <div style={{ display: 'flex', gap: '85px', marginBlock: '40px' }}>

                <Tecla onChange = {(valor) => {alert(valor)}}/>    <Tecla />    <Tecla />

            </div>

        </div>

    </>

}