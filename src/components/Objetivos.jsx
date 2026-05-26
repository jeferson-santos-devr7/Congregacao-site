import { useEffect, useRef } from 'react';
import './Objetivos.css';

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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function Objetivos() {
  const r1 = useReveal(0);
  const r2 = useReveal(100);
  const r3 = useReveal(200);

  return (
    <section id="objetivos" className="objetivos">
      <div className="obj-bg-shape" />
      <div className="objetivos-inner">
        <div className="obj-header animate" ref={r1}>
          <span className="section-tag">Propósito</span>
          <h2>Objetivo da<br /><em>Landing Page</em></h2>
          <div className="divider" />
          <p className="obj-intro">
            Cada elemento da página foi pensado para cumprir uma função clara na missão da congregação.
          </p>
        </div>

        <div className="obj-cards">
          <div className="obj-card animate" ref={r2}>
            <div className="obj-num">01</div>
            <div className="obj-icon">🎯</div>
            <h3>Presença Digital</h3>
            <p>
              Criar um ponto de contato profissional e confiável na internet, onde qualquer pessoa
              possa encontrar a congregação com facilidade — seja por busca, redes sociais ou indicação.
            </p>
          </div>

          <div className="obj-card featured animate" ref={r3}>
            <div className="obj-num">02</div>
            <div className="obj-icon">🤝</div>
            <h3>Conexão com Pessoas</h3>
            <p>
              Facilitar o primeiro contato: quem deseja conhecer a congregação, se voluntariar,
              fazer doações ou buscar apoio espiritual encontra um caminho simples e acolhedor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}