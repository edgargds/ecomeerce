
import React from 'react'

const Exercicio04 = () => {

    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
    ];

    const maiorDeVinte = usuarios.filter((idadeMaior) => idadeMaior.idade >= 20)

    return (
        <>
            <h1>Exercicio04</h1>
            <div>
                <li>
                    {maiorDeVinte.map((idadeMaior, index) => (
                        <div key={index}>

                            <h2>{idadeMaior.idade}</h2>

                        </div>
                    ))}
                </li>
            </div>

        </>
    )
}

export default Exercicio04


