import React from 'react'

const Exercicio02 = (props) => {

    const posts = [
        { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
        { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
        { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
        ];


  return (
    <div>
        <h1>Exercicio02</h1>
    {posts.map((item, index) => (
        <div key={index}>
        <li>{item.title}</li>
        <li>{item.content}</li>
        </div>
    ))}
    </div>
  )
}

export default Exercicio02