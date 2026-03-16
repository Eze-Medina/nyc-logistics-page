import { useEffect, useRef, useState } from 'react';
import img from '../../../../assets/images/image-about-01.webp'
import style from './story.module.css'

export const Story = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);
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
      className={`${style.story} ${visible ? style.story_visible : ""}`}>
      <div className={style.story_container}>
        <h2>Nuestra Historia</h2>
        <hr />
        <div className={style.story_content}>
          <p>
            N.Y.C Logistica nacio en 2024 con una idea simple: ofrecer un servicio de envios donde el cliente realmente importa. Somos un equipo pequeno pero apasionado que decidio emprender en el mundo de la logistica porque creemos que las personas y los negocios merecen un servicio confiable, puntual y con trato humano.
            <br /><br />
            Sabemos que apenas estamos comenzando, pero eso es justamente lo que nos motiva: cada envio que realizamos es una oportunidad para demostrar nuestro compromiso. Trabajamos dia a dia para crecer, mejorar nuestras rutas y ganar la confianza de mas clientes.
          </p>
          <img className={style.story_img} src={img} alt="" />
        </div>
      </div>
    </section>
  )
}