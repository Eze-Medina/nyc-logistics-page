import { NavLink } from 'react-router'
import { Services } from '../components/services/Services'
import { About } from '../components/about/About'
import { Highlights } from '../components/highlights/Highlights'
import { Features } from '../components/features/Features'
import logo from '../../../assets/images/logo-white.svg'
import style from './homepage.module.css'

export const HomePage = () => {
  return (
    <>
      <div className={style.hero}>
        <img className={style.hero_img} src={logo} alt="" />
        <span className={style.hero_text}>TU SOLUCION LOGISTICA</span>
        <NavLink className={style.hero_button} to={"/about"} end>
          CONOCENOS
        </NavLink>
      </div>
      <div className={style.home_content}>
        <Services />
        <About />
        <Highlights />
        <Features />
      </div>
    </>
  )
}