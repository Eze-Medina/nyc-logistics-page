import { Eye, Target } from 'lucide-react'
import style from './mission.module.css'

const missions = [
  {
    span: "Nuestra Mision",
    p: "Brindar un servicio de envios confiable y accesible, donde cada cliente reciba atencion personalizada y la tranquilidad de saber que su paquete esta en buenas manos.",
    icon: Target,
  },
  {
    span: "Nuestra Vision",
    p: "Convertirnos en una empresa de logistica reconocida por su honestidad, calidad de servicio y cercania con el cliente. Queremos crecer junto a las personas y negocios que confian en nosotros.",
    icon: Eye,
  }
];

export const Mission = () => {
  return (
    <section className={style.mission}>
      <div className={style.mission_container}>
        {
          missions.map((mission) => {
            const Icon = mission.icon;

            return (
              <div className={style.mission_content}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ backgroundColor: '#ebebeb', borderRadius: '10px', padding: '5px' }}>
                    <Icon size={30} color='#5B2572' style={{ margin: '5px' }} />
                  </div>
                  <span>{mission.span}</span>
                </div>
                <p>{mission.p}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}