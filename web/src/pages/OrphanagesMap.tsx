import React from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'
import Plus from '../images/plus.svg'
import arrowRight from '../images/arrow-right.svg'

import 'leaflet/dist/leaflet.css'

import Leaflet, { popup } from 'leaflet'

import '../styles/pages/orphanages-maps.css'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [156, 2]
})

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
            center={[-23.1588226,-49.9858485]}
            zoom={14}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker
              icon={mapIcon} 
              position={[-23.1588226,-49.9858485]}
            >
              <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
                Lar das meninas
                <Link to="/orphanages/1">
                  <img src={arrowRight} alt="Happy"/>
                </Link>
              </Popup>
            </Marker>

          </Map>


          <Link to="/orphanages/create" className="create-orphanage">
            <img src={Plus} alt="Happy"/>
          </Link>

        </div>
    )
}

export default OrphanagesMaps