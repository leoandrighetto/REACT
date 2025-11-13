export default function Tabela(props) {

    function excluir(contato) {

        if (confirm("Excluir o " + contato.nome + "?")) {
            props.onExcluir(contato.id)
        }

    }

    function editar(contato) {
        props.onEditar(contato);
    }

    return <>
        <div style={{ textAlign: 'center' }}>
            <table border={1} style={{ gap: '10px' }}>

                <thead>
                    <tr>
                        <th>Id </th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Comandos</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contatos.map(contato =>
                        <>

                            <tr>
                                <th>{contato.id}</th>
                                <th>{contato.nome}</th>
                                <th>{contato.email}</th>
                                <th><button onClick={() => editar(contato)} >Editar</button>


                                    <button onClick={() => excluir(contato)}>Excluir</button > </th>
                            </tr>
                        </>)}
                </tbody>
            </table>
        </div >
    </>
}

//{props.contatos.map(contato => <>ID: {contato.id} | NOME: {contato.nome} | EMAIL: {contato.email} </>)}