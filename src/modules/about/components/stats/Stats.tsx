import { Heart, MapPin, Truck, Users } from 'lucide-react'
import style from './stats.module.css'

const stats = [
  {
    span: "2024",
    p: "Año de fundacion",
    icon: Heart,
  },
  {
    span: "5",
    p: "Rutas activas",
    icon: MapPin,
  },
  {
    span: "100+",
    p: "Clientes Satisfechos",
    icon: Users,
  },
  {
    span: "500+",
    p: "Envios Realizados",
    icon: Truck,
  },
];

export const Stats = () => {
  return (
    <section className={style.stats}>
      <div className={style.stats_container}>
        {
          stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div className={style.stats_content}>
                <Icon size={40} color='#5B2572' style={{ margin: '5px' }} />
                <span>{stat.span}</span>
                <p>{stat.p}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}