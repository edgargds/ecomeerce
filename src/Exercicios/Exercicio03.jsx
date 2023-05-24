import React from 'react'

const Exercicio03 = () => {


    const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const NumeroPar = []



    for (let i = 0; i < Numeros.length; i++) {

        if (Numeros[i] % 2 === 0) {

            NumeroPar.push(
                <li key={i}>
                    {Numeros[i]}
                </li>)
        }
    }


    return (
        <>
            <h1>Exercicio03</h1>
            <div>
                <ul>
                    {NumeroPar}
                </ul>
            </div>
        </>
    )
}

export default Exercicio03