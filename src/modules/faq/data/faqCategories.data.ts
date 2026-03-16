export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  questions: FaqQuestion[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Envios y Entregas",
    questions: [
      {
        question: "Que servicios de envio ofrece N.Y.C Logistica?",
        answer:
          "Ofrecemos envios nacionales, envios internacionales y servicios de paqueteria y mensajeria. Estamos ampliando nuestras rutas constantemente para llegar a mas destinos.",
      },
      {
        question: "Cuanto tarda un envio nacional?",
        answer:
          "Los tiempos varian segun el destino, pero en general nuestros envios nacionales tardan entre 3 y 7 dias habiles. Te informamos un estimado al momento de realizar tu envio.",
      },
      {
        question: "Hacen envios internacionales?",
        answer:
          "Si, ofrecemos envios internacionales a destinos seleccionados. Los tiempos y costos varian segun el pais de destino. Contactanos para consultar disponibilidad y obtener una cotizacion.",
      },
      {
        question: "Puedo programar una fecha de entrega?",
        answer:
          "Hacemos nuestro mejor esfuerzo por respetar las fechas solicitadas. Contactanos directamente para coordinar una entrega en una fecha especifica y te confirmaremos la disponibilidad.",
      },
    ],
  },
  {
    title: "Rastreo y Actualizaciones",
    questions: [
      {
        question: "Como puedo rastrear mi envio?",
        answer:
          "Puedes rastrear tu envio ingresando tu numero de rastreo en nuestra pagina de Rastreo. Te enviamos el numero de rastreo por correo electronico o mensaje al momento de confirmar tu envio.",
      },
      {
        question: "Con que frecuencia se actualizan los estados?",
        answer:
          "Actualizamos el estado de tu envio en cada punto de control importante de la ruta. Recibiras notificaciones en los momentos clave como recogida, transito y entrega.",
      },
      {
        question: "Que hago si mi envio aparece sin movimiento?",
        answer:
          "Si tu envio no muestra actualizaciones por mas de 48 horas, contactanos directamente por telefono o correo. Investigaremos el estado de tu paquete y te daremos una respuesta lo antes posible.",
      },
    ],
  },
  {
    title: "Precios y Pagos",
    questions: [
      {
        question: "Como se calcula el costo de envio?",
        answer:
          "El costo depende del tamano, peso y destino del paquete. Puedes solicitar una cotizacion contactandonos directamente. Siempre te damos un precio claro antes de confirmar el envio.",
      },
      {
        question: "Que metodos de pago aceptan?",
        answer:
          "Aceptamos transferencias bancarias, efectivo y las principales tarjetas de credito y debito. Estamos trabajando para agregar mas opciones de pago pronto.",
      },
      {
        question: "Ofrecen precios especiales para envios frecuentes?",
        answer:
          "Si, si realizas envios de manera regular podemos ofrecerte tarifas preferenciales. Contactanos y con gusto evaluamos un plan que se ajuste a tus necesidades.",
      },
    ],
  },
  {
    title: "Proteccion y Reclamaciones",
    questions: [
      {
        question: "Que pasa si mi paquete llega danado?",
        answer:
          "Si tu envio llega con algun dano, contactanos dentro de las 48 horas siguientes a la entrega con fotos del paquete y del contenido. Revisaremos tu caso y buscaremos la mejor solucion.",
      },
      {
        question: "Ofrecen algun tipo de seguro para los envios?",
        answer:
          "Todos nuestros envios incluyen una proteccion basica. Para articulos de mayor valor, podemos ofrecerte opciones de cobertura adicional. Consultanos al momento de realizar tu envio.",
      },
      {
        question: "Que articulos no pueden enviarse?",
        answer:
          "No podemos enviar materiales peligrosos, inflamables, explosivos, sustancias ilegales ni alimentos perecederos sin empaque adecuado. Si tienes dudas sobre un articulo en particular, contactanos y te orientamos.",
      },
    ],
  },
]