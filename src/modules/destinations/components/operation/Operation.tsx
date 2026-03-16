import { ClipboardList, PackageCheck, Truck, MapPinCheck } from "lucide-react"
import style from './operation.module.css'

const operations = [
  {
    span: "Solicita tu envio",
    number: '1',
    icon: ClipboardList,
  },
  {
    span: "Retiramos el paquete",
    number: '2',
    icon: PackageCheck,
  },
  {
    span: "Realizamos el transporte",
    number: '3',
    icon: Truck,
  },
  {
    span: "Entregamos en destino",
    number: '4',
    icon: MapPinCheck,
  }
];

export const Operation = () => {
  return (
    <section className={style.operation}>
      <h2>¿Como funciona nuestro servicio?</h2>
      <p>Gestionamos todo el proceso logistico de principio a fin para que tu envio llegue sin complicaciones.</p>
      <div className={style.operation_container}>
        {
          operations.map((operation) => {
            const Icon = operation.icon;

            return (
              <div className={style.operation_content}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#5B2572',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      backgroundColor: 'black',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7em',
                      fontWeight: 'bold'
                    }}
                  >
                    {operation.number}
                  </span>
                  <Icon size={24} color="white" />
                </div>
                <span>{operation.span}</span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
