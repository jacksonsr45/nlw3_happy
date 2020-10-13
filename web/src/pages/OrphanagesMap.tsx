import React from 'react'
import { Link } from 'react-router-dom'

import mapMarkerImg from '../images/map-marker.svg'
import Plus from '../images/plus.svg'

import '../styles/pages/orphanages-maps.css'

function OrphanagesMaps() {
    return (
        <div id="page-map">
          <aside>
            <header>
              <img src={mapMarkerImg} alt="Happy"/>

              <h2>Escolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando sua visita</p>
            </header>
            <footer>
              <strong>Jacarezinho</strong>
              <span>Paraná</span>
            </footer>
          </aside>

          <div></div>

          <Link to="" className="create-orphanage">
            <img src={Plus} alt="Happy"/>
          </Link>

        </div>
    )
}

export default OrphanagesMaps