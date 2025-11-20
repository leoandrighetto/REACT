import axios from "axios"

import { useEffect, useState } from "react"

export default function Contatos() {
    const [contatos, setContatos] = useState(null)


    async function carregarDados() {
        console.log('aqui')
        let retorno = await axios.get("http://localhost:3000/contatos");
        let contatoServidor = retorno.data;
        setContatos(contatoServidor);
        console.log(contatoServidor);
    }

    //SEMPRE USA ARROW FUNCTION QUE NÃO É ASSÍNCRONA, E CHAMA (CCHHAAMMAA) A FUNÇÃO.
    useEffect(() => { 
        carregarDados() }, [])

    if (contatos===null){
        return "Carregando..."
    }
    return <>


        <thead>
            <tr>
                <th>ID: </th>
                <th>Nome: </th>
                <th>Email: </th>
            </tr>
        </thead>
        <tbody>
            {contatos.map(contato => <>
                <tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.email}</td>
                    <td>{contato.nome}</td>
                </tr>
            </>

            )}
        </tbody>


    </>
}
