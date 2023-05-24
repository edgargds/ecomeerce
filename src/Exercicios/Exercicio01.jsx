import React from 'react'

const Exercicio01 = () => {

    const nomes = ['Alice', 'Bob', 'Carol', 'David'];

  return (
    <div>
        <>
        <h1>Exercicios</h1>
        {nomes.map((item) =>(
            <li>{item}</li>
        ))}
        </>
    </div>
  )
}

export default Exercicio01
