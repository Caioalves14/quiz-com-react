import React from 'react'
import Quiz from "../img/quiz.svg"
import "./Welcome.css";

const Welcome = () => {
  return (
    <div id='welcome'>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para iniciar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do quis" />
    </div>
  )
}

export default Welcome