import { Question } from '../question/Question'
import { faqCategories } from '../../data/faqCategories.data'
import style from './questions.module.css'

export const Questions = () => {
  return (
    <section className={style.questions}>
      <div className={style.questions_container}>
        <h2>Como Podemos Ayudarte?</h2>
        <hr />
        <p>Explora nuestras preguntas frecuentes organizadas por categoria.</p>
        {
          faqCategories.map((category) => (
            <div className={style.questions_list}>
              <h3>{category.title}</h3>
              <div className={style.area}>
                {category.questions.map((questions) => (
                  <Question
                    question={questions.question}
                    answer={questions.answer} />
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}