import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react'
import style from './highlights.module.css'

const highlightsItems = [
  'Trato cercano y personalizado',
  'Seguimiento de tus envios',
  'Flexibilidad para tus necesidades',
  'Precios competitivos',
  'Compromiso con la puntualidad',
  'Equipo comprometido contigo',
]

export const Highlights = () => {

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
    <section className={style.highlights}>
      <div
        ref={sectionRef}
        className={`${style.highlights_container} ${visible ? style.highlights_container_visible : ""}`}>
        <header className={style.highlights_brand}>
          <h2>¿Por que elegirnos?</h2>
          <span>Somos una empresa joven con ganas de hacer las cosas bien.</span>
          <p>En N.Y.C Logistica creemos que no necesitas ser una gran corporacion para recibir un servicio de calidad. Nos enfocamos en brindarte un trato humano, cercano y eficiente.</p>
        </header>
        <div className={style.check_container}>
          <div>
            <ul className={style.highlights_list}>
              {
                highlightsItems.map((item) => (
                  <li key={item} className={style.highlights_item}>
                    <div style={{ backgroundColor: '#5B2572', borderRadius: '5px', padding: '2px' }}>
                      <Check color='white' size={18} />
                    </div>
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}