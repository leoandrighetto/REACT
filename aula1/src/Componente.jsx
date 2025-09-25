//componente é sempre uma função que retorna uma repres. gráfica

function componente(){
    let a=1;
    let b=2;
    let total = a+b;
    return (

        //RETORNA A REPRESENTAÇÃO GRÁFICA

        <div>Valor: {total}</div>
    )
}

export default componente;