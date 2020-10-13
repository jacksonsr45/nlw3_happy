import React from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'
import Plus from '../images/plus.svg'

import 'leaflet/dist/leaflet.css'

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

          <Map 
            center={[-22.986752,-49.8597888]}
            zoom={14}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          </Map>

          <Link to="" className="create-orphanage">
            <img src={Plus} alt="Happy"/>
          </Link>

        </div>
    )
}

export default OrphanagesMaps