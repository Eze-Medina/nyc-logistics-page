import { Choose } from "../components/choose/Choose";
import { Locations } from "../components/locations/Locations";
import { Operation } from "../components/operation/Operation";
import style from "./destinations.module.css";
import heroImage from "../../../assets/images/hero-02.webp";

export const Destinations = () => {
  return (
    <>
      <div className={style.hero}>
        <img src={heroImage} className={style.hero_bg} alt="" />

        <h1 className={style.hero_heading}>
          Envios rapidos y seguros en la region
        </h1>

        <span className={style.hero_text}>
          Conectamos empresas y personas con soluciones logisticas confiables.
        </span>
      </div>

      <div className={style.destinations_content}>
        <Locations />
        <Choose />
        <Operation />
      </div>
    </>
  );
};