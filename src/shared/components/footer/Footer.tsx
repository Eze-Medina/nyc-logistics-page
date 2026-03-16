import { NavLink } from 'react-router'
import { Mail, MapPin, Package, Phone } from 'lucide-react'
import style from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container_1}>
        <Package color="White" size={45} />
        <h2 className={style.footer_heading}>¿Necesitas enviar algo?</h2>
        <span className={style.footer_text}>
          Contactanos hoy y te ayudamos a encontrar la mejor solucion de envio para ti o tu negocio.
        </span>
        {/* <button className={style.footer_button}>RASTREA TU ENVIO</button> */}
      </div>
      <div className={style.footer_container_2}>
        <section className={style.footer_brand}>
          <div className={style.footer_title}>
            <h3 className={style.footer_heading}>
              <a>
                <img />
                N.Y.C Logistica
              </a>
            </h3>
          </div>
          <p className={style.footer_description}>Tu socio confiable en envios y logistica. Una empresa joven comprometida con brindarte el mejor servicio.</p>
        </section>

        <nav className={style.footer_nav}>
          <h3 className={style.footer_heading}>ENLACES RAPIDOS</h3>
          <ul className={style.footer_list}>
            <li className={style.footer_item}>
              <NavLink to={"/destinations"} className={style.footer_link}>Nuestros destinos</NavLink>
            </li>
            <li className={style.footer_item}>
              <NavLink to={"/about"} className={style.footer__link}>Nosotros</NavLink>
            </li>
            <li className={style.footer_item}>
              <NavLink to={"/faq"} className={style.footer_link}>Preguntas Frecuentes</NavLink>
            </li>
          </ul>
        </nav>

        <nav className={style.footer_nav}>
          <h3 className={style.footer_heading}>SERVICIOS</h3>
          <ul className={style.footer_list}>
            <li className={style.footer_item}>
              <a className={style.footer_link}>Retiros a domicilio</a>
            </li>
            <li className={style.footer_item}>
              <a className={style.footer_link}>Paqueteria y Mensajeria</a>
            </li>
          </ul>
        </nav>

        <div className={style.footer_contact}>
          <h3 className={style.footer_heading}>CONTACTO</h3>
          <div className={style.footer_list}>
            <span className={style.footer_item}>
              <Phone color="black" size={16} />
              +54 342 596 5538
            </span>
            <span className={style.footer_item}>
              <Mail color="black" size={16} />
              nyclogistica.st@gmail.com
            </span>
            <span className={style.footer_item}>
              <MapPin color="black" size={16} />
              Av Ejercito Arg 3343, Santo Tomé
            </span>
          </div>
        </div>
      </div >
      <div className={style.nose}>
        <span>2026 N.Y.C Logistica. Todos los derechos reservados.</span>
      </div>
    </footer >
  )
}