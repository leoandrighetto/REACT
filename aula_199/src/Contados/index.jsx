import Tabela from "./Tabela";
import { useState } from "react"
import Cadastro from "./Cadastro";

let maxID = 3;
export default function Contatos() {

    const [contatos, setContatos] = useState([{ id: 1, nome: 'Maria do exemplo', email: 'maria@fake.com' }, { id: 2, nome: 'João do exemplo', email: 'joao@fake.com' }]);
    const [contatoEdicao, setContatoEdicao] = useState(null);

    function cadastrar(contato) {

        if (contato.id) {
           //edicao
           let novoContatos = contatos.map(contatoV => {
            if(contatoV.id===contato.id){
                return contato;
            }else{
                return contatoV;
            }
           })
           setContatos(novoContatos)
        } else {

            contato.id = maxID++;
            // let novoContatos = [...contatos, contato];
            let novoContatos = [...contatos, contato];


            setContatos(novoContatos);
        }
    }

    function onExcluir(id) {

        let novoContatos = contatos.filter(contatos => contatos.id != id);

        setContatos(novoContatos);
    }

    function onEditar(contato) {

        //armazenar um estado no pai representando o objeto que será editado e passar para o filho, neste caso, cadastro.
        setContatoEdicao(contato);

    }

    return <>
        <div >
            CRUD Contatos <br />
            <br />
            <Cadastro key={contatoEdicao?.id} onCadastrar={cadastrar} editar={contatoEdicao} />
            <br />
            <Tabela contatos={contatos} onExcluir={onExcluir} onEditar={onEditar} />

        </div>
    </>

}
