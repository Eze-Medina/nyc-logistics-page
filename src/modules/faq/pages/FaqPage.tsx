import { Questions } from "../components/questions/Questions"
import { Support } from "../components/support/Support"
import style from './faqpage.module.css'

export const FaqPage = () => {
  return (
    <>
      <div className={style.hero}>
        <h1 className={style.hero_heading}>Como Podemos Ayudarte?</h1>
        <span className={style.hero_text}>Encuentra respuestas a las preguntas mas comunes sobre nuestros servicios.</span>
      </div>
      <div className={style.faq_content}>
        <Questions />
        <Support />
      </div>
    </>
  )
}