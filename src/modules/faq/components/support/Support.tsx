import { Phone, Mail, MessageCircle } from "lucide-react"
import style from './support.module.css'

const missions = [
  {
    span01: "Llamanos",
    span02: "+ 54 342 596 5538",
    p: "Diponible Lun-Sab, 8 AM - 10 PM",
    icon: Phone,
  },
  {
    span01: "Escribenos",
    span02: "nyclogistica.st@gmail.com",
    p: "Respondemos en menos de 24 horas",
    icon: Mail,
  },
  {
    span01: "WhatsApp",
    span02: "Envianos un mensaje",
    p: "Respuesta rapida por WhatsApp",
    icon: MessageCircle,
  }
];

export const Support = () => {
  return (
    <div className={style.support}>
      <h2>¿Aun Tienes Preguntas?</h2>
      <hr />
      <p>Estamos aqui para ayudarte. No dudes en contactarnos por cualquiera de estos medios.</p>
      <div className={style.support_container}>
        <div className={style.support_list}>
          {
            missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <div className={style.support_content}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#e6e6e6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={24} color="#5B2572" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                    <span>{mission.span01}</span>
                    <span style={{ fontWeight: '500', fontSize: '0.9em' }}>{mission.span02}</span>
                  </div>
                  <p>{mission.p}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}