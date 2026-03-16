import { CheckCircle, MapPin, Zap, Users } from "lucide-react"
import style from './choose.module.css'

const choose = [
  {
    span: "Entregas confiables",
    p: "Tu paquete llega en tiempo y forma.",
    icon: CheckCircle,
  },
  {
    span: "Cobertura regional",
    p: "Operamos en distintas localidades de Santa Fe.",
    icon: MapPin,
  },
  {
    span: "Rapidez operativa",
    p: "Optimizamos rutas para entregar mas rapido.",
    icon: Zap,
  },
  {
    span: "Atencion personalizada",
    p: "Soluciones logisticas adaptadas a cada cliente.",
    icon: Users,
  }
];

export const Choose = () => {
  return (
    <section className={style.choose}>
      <h2>¿Por que elegir N.Y.C Logistica?</h2>
      <div className={style.choose_container}>
        {
          choose.map((choose) => {
            const Icon = choose.icon;

            return (
              <div className={style.choose_content}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(129, 109, 241, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px'
                  }}
                >
                  <Icon size={24} color="#5B2572" />
                </div>
                <span>{choose.span}</span>
                <p>{choose.p}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}