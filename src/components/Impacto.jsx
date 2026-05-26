import { useEffect, useRef } from 'react';
import './Impacto.css';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const stats = [
  { num: '24/7', label: 'Disponibilidade', desc: 'A página trabalha pela congregação a qualquer hora, sem depender de horário comercial.' },
  { num: '100%', label: 'Acessível', desc: 'Qualquer pessoa com internet pode acessar, de qualquer lugar do mundo.' },
  { num: '1', label: 'Ponto de Entrada', desc: 'Um único link que concentra toda a comunicação digital da congregação.' },
];

export default function Impacto() {
  const refs = stats.map((_, i) => useReveal(i * 120));
  const hdr = useReveal(0);
  const cta = useReveal(400);

  return (
    <section id="impacto" className="impacto">
      <div className="imp-bg" />
      <div className="imp-inner">
        <div className="imp-header animate" ref={hdr}>
          <span className="section-tag">Resultados</span>
          <h2>Impacto<br /><em>Esperado</em></h2>
          <div className="divider center" />
          <p className="imp-intro">
            Com uma landing page bem estruturada, a congregação ganha autonomia
            para crescer sua presença digital de forma sustentável e profissional.
          </p>
        </div>

        <div className="imp-stats">
          {stats.map((s, i) => (
            <div className="imp-stat animate" ref={refs[i]} key={s.label}>
              <div className="imp-num">{s.num}</div>
              <div className="imp-label">{s.label}</div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="imp-cta animate" ref={cta}>
          <p>Com uma landing page bem estruturada, a congregação ganha autonomia para crescer sua presença digital de forma sustentável e profissional.</p>
          <a href="#contato" className="btn-primary">Iniciar o Projeto</a>
        </div>
      </div>
    </section>
  );
}