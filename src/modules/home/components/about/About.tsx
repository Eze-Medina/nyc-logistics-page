import { useEffect, useRef, useState } from 'react';
import ilustration from '../../../../assets/images/home-about-01.jpg'
import style from './about.module.css'

export const About = () => {

  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section
      ref={sectionRef}
      className={`${style.about} ${visible ? style.about_visible : ""}`}>
      <h2>¿Quiénes Somos?</h2>
      <hr />
      <div className={style.nose}>
        <div className={style.about_text}>
          <p><span>NYC Logística</span> es una empresa de envíos fundada en 2024 que nace con una idea simple: ofrecer un servicio claro, responsable y sin complicaciones. Empezamos como un proyecto pequeño, enfocado en realizar cada envío con cuidado y cumplir con lo que prometemos.</p>
          <br />
          <p>Estamos dando nuestros primeros pasos en el mundo de la logística, trabajando para mejorar nuestras rutas, nuestros tiempos y la experiencia de quienes confían en nosotros. Nuestro objetivo es crecer de forma constante, construyendo confianza envío a envío.</p>
        </div>
        <div className={style.about_img}>
          <img src={ilustration} alt="" />
        </div>
      </div>
    </section>
  )
}
