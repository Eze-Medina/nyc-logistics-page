import { useState } from "react"
import { NavLink } from "react-router"
import { House, MapPinHouse, Users, MessageCircleQuestion, Menu, X } from "lucide-react"
import logo from "../../../../public/icon-black.svg"
import style from "./navbar.module.css"

export const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <header className={style.container}>
      <NavLink to={"/"} end>
        <img src={logo} alt="Company logo" className={style.nav_img} />
      </NavLink>

      <button
        className={style.menu_button}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`${style.navbar} ${open ? style.navbar_open : ""}`}>
        <ul className={style.navbar_list}>

          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? style.navbar_link_active : style.navbar_link}
              to={"/"}
            >
              <House size={20} />Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? style.navbar_link_active : style.navbar_link}
              to={"/destinations"}
            >
              <MapPinHouse size={20} />Destinos
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? style.navbar_link_active : style.navbar_link}
              to={"/about"}
            >
              <Users size={20} />Nosotros
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? style.navbar_link_active : style.navbar_link}
              to={"/faq"}
            >
              <MessageCircleQuestion size={20} />Preguntas Frecuentes
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}