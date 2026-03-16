import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollTop/ScrollTop";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import whatsapp from '../../assets/icon/social.png'
import style from './layout.module.css'


export const Layout = () => {
  return (
    <div className={style.layout}>
      <ScrollToTop />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <a href="https://wa.me/5493425965538" className={style.whatsapp} target="_blank">
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};