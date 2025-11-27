import axios from "axios";
import { useEffect, useState } from "react"
const API = 'http://localhost:3000'

export default function Contatos(props) {
    const [contatos, setContatos] = useState([])
    const [cadastrando, setCadastrando] = useState(false)
    const [contatoEditado, setContatoEditado] = useState(null)
    async function carregarDados() {
        console.log("Aqui");
        let retorno = await axios.get(API + "/contatos/")
        let contatosServidor = retorno.data
        console.log(contatosServidor);
        setContatos(contatosServidor)
    }
    // useEffect faz alguma coisa (função) quando o componente MUDA.
    //SEMPRE USA ARROW FUNCTION QUE NÃO É ASSÍNCRONA, E CHAMA (CCHHAAMMAA) A FUNÇÃO.
    
    useEffect(() => {
        carregarDados()
    }, [])

    //quando não estamos controlando o status do formulario temos que utilizar o name como parâmetro e declarar 


    async function cadastrarContato(form) {
        console.log(form);
        let nome = form.get("nome")
        let email = form.get("email")
        console.log(nome);
        console.log(email);
        const novoContato = {
            nome: nome,
            email: email
        }
        let retorno
        if (contatoEditado) {
            retorno = await axios.put(API + "/contatos/" + contatoEditado.id, novoContato)
            setContatoEditado(null)
        } else {
            retorno = await axios.post(API + "/contatos/", novoContato)
        }
        console.log(retorno);
        setCadastrando(false)
        carregarDados()

    }

    async function excluirContato(id) {
        if (confirm("Tem certeza que deseja excluir este contato?")) {
            const retorno = await axios.delete(API + "/contatos/" + id)
            console.log(retorno);
            carregarDados()
        }
    }

    async function editarContato(id) {
        setCadastrando(false)
        let retorno = await axios.get(API + "/contatos/" + id)
        let novoContatoEditar = retorno.data
        setContatoEditado(novoContatoEditar)
        console.log(novoContatoEditar);
        setCadastrando(true)

    }


    if (contatos === null) {
        return "Carregando...";
    }

    return <>
        <h2>Contatos</h2>
        <button onClick={() => setCadastrando(true)}>Cadastrar Novo Contato</button>
        {cadastrando ? <dialog open={cadastrando}>{contatoEditado ? "Edição" : "Cadastrar"}
            <br /><br />
            <form action={(form) => cadastrarContato(form)}>
                <label>Nome: <input required name="nome" defaultValue={contatoEditado?.nome} placeholder="Digite o nome..."></input></label>
                <br /><br />
                <label>E-mail: <input required name="email" defaultValue={contatoEditado?.email} type="mail" placeholder="Digite o e-mail..."></input></label>
                <br /><br />
                <button type="submit">{contatoEditado ? "Atualizar" : "Cadastrar"}</button>
                <button type="reset" onClick={() => {
                    setCadastrando(false)
                    setContatoEditado(null)
                }}>Fechar</button>
            </form>
        </dialog> : ""}
        <br /><br />
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th><th>Nome</th><th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map(contato => <tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                    <td><button disabled={cadastrando} onClick={() => editarContato(contato.id)}>Editar</button></td>
                    <td><button disabled={cadastrando} onClick={() => excluirContato(contato.id)}>Excluir</button></td>
                </tr>)}
            </tbody>
        </table>
    </>

}