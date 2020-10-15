import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapIcon from '../utils/mapIcon'


import mapMarkerImg from '../images/map-marker.svg'
import Plus from '../images/plus.svg'
import arrowRight from '../images/arrow-right.svg'

import '../styles/pages/orphanages-maps.css'
import api from '../services/api'


interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

function OrphanagesMaps() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data)
    })
  },[])
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
            
            {orphanages.map(orphanage => {
              return (
                <Marker
                  icon={mapIcon} 
                  position={[orphanage.latitude,orphanage.longitude]}
                  key={orphanage.id}
                >
                  <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
                      {orphanage.name}
                    <Link to={`/orphanages/${orphanage.id}`}>
                      <img src={arrowRight} alt="Happy"/>
                    </Link>
                  </Popup>
                </Marker>
              )
            })}

          </Map>


          <Link to="/orphanages/create" className="create-orphanage">
            <img src={Plus} alt="Happy"/>
          </Link>

        </div>
    )
}

export default OrphanagesMaps