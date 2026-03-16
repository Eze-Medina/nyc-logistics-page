import { Stats } from "../components/stats/Stats"
import { Story } from "../components/story/Story"
import { Mission } from "../components/mission/Mission"
import { Values } from "../components/values/Values"
import style from './aboutpage.module.css'

export const AboutPage = () => {
  return (
    <>
      <div className={style.hero}>
        <h1 className={style.hero_heading}>Sobre NYC Logistica</h1>
        <span className={style.hero_text}>Una empresa joven con un gran compromiso.</span>
      </div>
      <div className={style.about_content}>
        <Stats />
        <Story />
        <Mission />
        <Values />
      </div>
    </>
  )
}
