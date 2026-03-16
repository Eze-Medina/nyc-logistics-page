import { useState } from "react";
import { Map } from "../map/Map";
import style from './locations.module.css'

const locations: Record<string, [number, number]> = {
  central: [-31.671109598007572, -60.778863317857876],
  santaFe: [-31.609451152060178, -60.69899899393366],
  sanFrancisco: [-31.424481426541185, -62.0837925236087],
  rafaela: [-31.25304579657849, -61.492938050679776],
  sunchales: [-30.944699971921214, -61.55998569813025],
};

export const Locations = () => {
  const [position, setPosition] = useState<[number, number]>(locations.santaFe);

  const [active, setActive] = useState('')

  return (
    <div className={style.locations}>
      <div className={style.title}>
        <h2>Cobertura de nuestros envios</h2>
        <p>Realizamos envios y retiros programados en distintas localidades de la region. Nuestro servicio esta disenado para ofrecer rapidez, seguridad y seguimiento en cada entrega.</p>
      </div>
      <div className={style.locations_container}>
        <div className={style.buttons_container}>
          <span>Explora nuestras localidades</span>
          <p>Selecciona una ciudad para ver su ubicacion en el mapa. Nuestro equipo realiza entregas frecuentes en estas zonas.</p>
          <div className={style.buttons}>
            <button
              onClick={() => {
                setPosition(locations.central)
                setActive('central')
              }}
              className={active === 'central' ? style.active : ''}
            >
              Central Logistica
            </button>

            <button
              onClick={() => {
                setPosition(locations.santaFe)
                setActive('santaFe')
              }}
              className={active === 'santaFe' ? style.active : ''}
            >
              Santa Fe
            </button>

            <button
              onClick={() => {
                setPosition(locations.sanFrancisco)
                setActive('sanFrancisco')
              }}
              className={active === 'sanFrancisco' ? style.active : ''}
            >
              San Francisco
            </button>

            <button
              onClick={() => {
                setPosition(locations.rafaela)
                setActive('rafaela')
              }}
              className={active === 'rafaela' ? style.active : ''}
            >
              Rafaela
            </button>

            <button
              onClick={() => {
                setPosition(locations.sunchales)
                setActive('sunchales')
              }}
              className={active === 'sunchales' ? style.active : ''}
            >
              Sunchales
            </button>
          </div>
        </div>
        <div className={style.map_container}><Map position={position} /></div>
      </div>
    </div>
  )
}
