import { Clock4, Headphones, Shield, Truck } from 'lucide-react'
import style from './features.module.css'

const features = [
  {
    span: "Envios Seguros",
    p: "Cada paquete es manejado con cuidado y protegido durante todo el trayecto hasta su destino.",
    icon: Shield,
  },
  {
    span: "Atencion Personalizada",
    p: "Te acompanamos en cada paso del proceso con atencion directa y cercana.",
    icon: Headphones,
  },
  {
    span: "Entregas Puntuales",
    p: "Nos comprometemos a cumplir con los tiempos de entrega acordados.",
    icon: Clock4,
  },
  {
    span: "Cobertura en Crecimiento",
    p: "Ampliamos nuestras rutas constantemente para llegar a mas destinos.",
    icon: Truck,
  }
];

export const Features = () => {
  return (
    <section className={style.features}>
      <div className={style.features_container}>
        {
          features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.span} className={style.features_content}>
                <Icon size={40} color='#5B2572' style={{ margin: '5px' }} />
                <span>{feature.span}</span>
                <p>{feature.p}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}