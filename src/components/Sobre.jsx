import { useEffect, useRef } from 'react';
import './Sobre.css';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Sobre() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-inner">
        <div className="sobre-header animate" ref={r1}>
          <span className="section-tag">Como Surgiu o Projeto</span>
          <h2>A história por trás<br /><em>de uma missão digital</em></h2>
          <div className="divider" />
        </div>

        <div className="sobre-grid">
          <div className="sobre-card animate" ref={r2} style={{ animationDelay: '0.1s' }}>
            <div className="card-icon">◈</div>
            <h3>O Ponto de Partida</h3>
            <p>
              A congregação tinha uma missão poderosa, mas pouca visibilidade online.
              O projeto nasceu da necessidade de criar uma porta de entrada digital
              acessível e acolhedora para quem busca conhecer e se conectar com as Irmãs.
            </p>
          </div>

          <div className="sobre-card animate" ref={r3} style={{ animationDelay: '0.25s' }}>
            <div className="card-icon">◇</div>
            <h3>O Processo Criativo</h3>
            <p>
              A partir de conversas com a equipe, mapeamos as necessidades reais:
              identidade visual coerente, conteúdo claro e uma estrutura que facilitasse
              o contato de visitantes, vocacionadas e apoiadores.
            </p>
          </div>
        </div>

        <div className="sobre-quote animate">
          <blockquote>
            "Uma presença digital construída com propósito — para que a missão das Irmãs
            alcance quem precisa encontrá-las."
          </blockquote>
        </div>
      </div>
    </section>
  );
}