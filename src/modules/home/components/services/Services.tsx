import { Check, Globe, MapPin, Van } from 'lucide-react'
import style from './services.module.css'

export const Services = () => {
  return (
    <section className={style.services}>
      <div className={style.services_container}>
        <div className={style.services_locations}>
          <div className={style.hola}>
            <Globe size={30} color={'#5B2572'} style={{ backgroundColor: '#cacacaab', padding: '10px', borderRadius: '15px' }} />
            <h2>Nuestros destinos</h2>
          </div>
          <p>Realizamos envíos a las principales ciudades en los alrededores de Santa Fe Capital, asegurando cobertura integral en cada localidad cercana.</p>
          <div className={style.services_content}>
            <ul>
              <li>
                <MapPin style={{ padding: '5px', backgroundColor: '#e0e0e0', borderRadius: '50%' }} />
                <span>Santa Fe</span>
                <p>Capital provincial, centro administrativo y cultural, con fuerte desarrollo en servicios, educación y comercio.</p>
              </li>
              <li>
                <MapPin style={{ padding: '5px', backgroundColor: '#e0e0e0', borderRadius: '50%' }} />
                <span>San Francisco</span>
                <p>Ciudad con gran actividad industrial y comercial, reconocida por su dinamismo económico y su ubicación estratégica en el corredor productivo.</p>
              </li>
              <li>
                <MapPin style={{ padding: '5px', backgroundColor: '#e0e0e0', borderRadius: '50%' }} />
                <span>Rafaela</span>
                <p>Primera colonia agrícola organizada del país, destacada por su tradición agroindustrial y su aporte histórico a la inmigración europea.</p>
              </li>
              <li>
                <MapPin style={{ padding: '5px', backgroundColor: '#e0e0e0', borderRadius: '50%' }} />
                <span>Sunchales</span>
                <p>Ciudad referente en el cooperativismo y la producción agropecuaria, reconocida como la Capital Nacional del Cooperativismo.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.services_shipments}>
          <div className={style.hola}>
            <Van size={30} color={'#5B2572'} style={{ backgroundColor: '#cacacaab', padding: '10px', borderRadius: '15px' }} />
            <h2>Nuestros Servicios</h2>
          </div>
          <p>Ofrecemos soluciones de logística adaptadas a tus necesidades, con la confiabilidad y profesionalismo que nos caracteriza.</p>
          <div className={style.services_content}>
            <div className={style.messaging}>
              <h3>Paquetería y Mensajería</h3>
              <span>Transporte rápido y seguro de paquetes, documentos y encomiendas entre nuestras localidades de operación.</span>
              <p>Ideal para envíos comerciales, documentación importante o entregas urgentes.</p>
              <ul className={style.messaging_list}>
                <li><Check color='#5B2572' />Protección de mercancía</li>
                <li><Check color='#5B2572' />Confirmación de entrega</li>
              </ul>
            </div>
            <div className={style.messaging}>
              <h3>Búsqueda a Domicilio</h3>
              <span>Retiramos tus envíos directamente desde tu hogar, oficina o negocio para que no tengas que trasladarte.</span>
              <p>Coordinamos el retiro y nos encargamos de todo el proceso de envío.</p>
              <ul className={style.messaging_list}>
                <li><Check color='#5B2572' />Agendamiento flexible</li>
                <li><Check color='#5B2572' />Personal capacitado</li>
                <li><Check color='#5B2572' />Sin costos ocultos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}