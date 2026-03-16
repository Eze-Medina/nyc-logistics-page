import { Clock, Headphones, Shield, TrendingUp } from 'lucide-react'
import style from './values.module.css'

const values = [
  {
    span: "Confiabilidad",
    p: "Cada envio es manejado con cuidado y responsabilidad, porque sabemos lo importante que es tu paquete.",
    icon: Shield,
  },
  {
    span: "Puntualidad",
    p: "Nos comprometemos a cumplir los tiempos de entrega acordados. Tu tiempo es valioso para nosotros.",
    icon: Clock,
  },
  {
    span: "Mejora Continua",
    p: "Estamos en constante aprendizaje y crecimiento para ofrecerte un servicio cada vez mejor.",
    icon: TrendingUp,
  },
  {
    span: "Trato Cercano",
    p: "Somos un equipo pequeno y eso nos permite darte una atencion directa, personalizada y humana.",
    icon: Headphones,
  },
];

export const Values = () => {
  return (
    <div className={style.values}>
      <h2>Nuestros Valores</h2>
      <hr />
      <p>Los principios que nos guian desde el primer dia en N.Y.C Logistica.</p>
      <div className={style.values_container}>
        {
          values.map((value) => {
            const Icon = value.icon;

            return (
              <div className={style.values_content}>
                <Icon size={40} color='#5B2572' style={{ margin: '5px' }} />
                <span>{value.span}</span>
                <p>{value.p}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}