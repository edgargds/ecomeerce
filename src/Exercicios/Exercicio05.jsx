import React from 'react'

const Exercicio05 = () => {


    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
    ];

    const maiorQueTrinta = produtos.filter((trintaReais) => trintaReais.preco > 30)

    return (
        <>
            <h1>Exercicio05</h1>
            <div >
                <li>
                    {maiorQueTrinta.map((trintaReais, idex) => (
                        <div key={idex}>
                            <h2>{trintaReais.preco}</h2>
                        </div>
                    ))}
                </li>
            </div>

        </>


    )
}

export default Exercicio05