import { useState } from "react";
export default function Cadastro(props) {

    const [nome, setNome] = useState(props?.editar?.nome || "");
    const [email, setEmail] = useState(props?.editar?.email || "");

    // function mudarNome(event) {
    //     setNome(event.target.value);
    //     console.log(nome)
    // }

    // function mudarEmail(event) {
    //     setEmail(event.target.value);
    //     console.log(email)
    // }

    function cadastrar() {
        if (!nome || nome.trim() == ""
            || !email || email.trim() == "") {
                alert('preencha os espaços');
                return
                }

            const contato = {
                id:props?.editar?.id,
                nome: nome,
                email: email
            };

            props.onCadastrar(contato);
            setNome("")
            setEmail("")
        
    }


    return <>

        <div>

            <label>Nome: </label>
            <input value={nome} onChange={(event) => setNome(event.target.value)} />
            <br /><br />
            <label>E-mail: </label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} />
            <br /><br />

            <button onClick={cadastrar}>{props.editar ? "Salvar" : "Cadastrar"}</button>

        </div>

    </>

}