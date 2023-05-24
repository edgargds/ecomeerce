import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"


const Home = (props) => {
  return (
    <>
    <Header />
    <h1>{props.nome}</h1>
    <h2>{props.sobrenome}</h2>
    <Footer />
    </>
  )
}

export default Home
