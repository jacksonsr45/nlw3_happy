import React from 'react'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg'
import arrowRight from '../images/arrow-right.svg'

function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
          <main>
            <h1>
              Leve felicidade para o mundo
            </h1>
            <p>
              Visite orfanatos e mude o dia de muitas crianças.
            </p>
            <div className="location">
              <strong>Jacarezinho</strong>
              <span>Paraná</span>
            </div>
            <a className="enter-app" href="">
              <img src={arrowRight} alt="App"/>
            </a>
          </main>
        </div>
      </div>
    )
}

export default Landing