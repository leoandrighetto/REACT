import axios from "axios";
import adicionar from './'
import { useEffect, useState } from "react";

export default function Produtos() {

    const [produtos, setProdutos] = useState(null);

    async function listarProdutos() {

        const jsonProdutos = await axios.get('http://localhost:3000/produtos')
        const listaProdutos = jsonProdutos.data;
        setProdutos(listaProdutos);
        console.log(listaProdutos)
    }

    useEffect(() => { listarProdutos() }, [])

    if (produtos === null) {
        return "Carregando..."
    }

    return <>
    <h1>SISTEMA DE VENDAS</h1> <br /><br /><br />

    <button>Visualizar Pedidos</button> <br /><br /><br />
    Gerenciamento de Vendas:
    <br />
    <br />
    <br />
        <thead>
            <tr>
                <th>ID</th>
                <th>Estoque</th>
                <th>Nome</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {produtos.map(produto => <>
            <tr>
                
                <td>Nome: {produto.nome} - {produto.valor} (Estoque: {produto.estoque})</td>
                <img src="adicionar"/>

            </tr>
            
            </>)}
        </tbody>
        <br />
        <br />
        <br />

    </>
}