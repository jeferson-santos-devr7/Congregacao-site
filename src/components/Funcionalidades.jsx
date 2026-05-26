import { useEffect, useRef } from 'react';
import './Funcionalidades.css';

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

const features = [
  { icon: '🏛️', title: 'Apresentação da Congregação', desc: 'História e missão em destaque' },
  { icon: '🖼️', title: 'Galeria de Fotos', desc: 'Identidade visual' },
  { icon: '📋', title: 'Formulário de Contato', desc: 'Canal direto e simples' },
  { icon: '➕', title: 'Botão de Ação', desc: 'Doações ou vocação' },
  { icon: '🔗', title: 'Links para Redes Sociais', desc: 'Integração com plataformas' },
  { icon: '📱', title: 'Responsividade', desc: 'Qualquer dispositivo' },
];

export default function Funcionalidades() {
  const refs = features.map((_, i) => useReveal(i * 80));
  const hdr = useReveal(0);
  const txt = useReveal(200);

  return (
    <section id="funcionalidades" className="funcionalidades">
      <div className="func-inner">
        <div className="func-left">
          <div className="func-header animate" ref={hdr}>
            <span className="section-tag">O que o visitante encontra</span>
            <h2>Funcionalidades<br /><em>da Página</em></h2>
            <div className="divider" />
          </div>
          <div className="func-text animate" ref={txt}>
            <p>
              A página foi estruturada para guiar o visitante de forma natural — desde o
              primeiro contato visual até a ação desejada, seja entrar em contato,
              conhecer mais ou se envolver com a missão das Irmãs.
            </p>
            <p>
              Cada elemento foi pensado para transmitir <strong>acolhimento, credibilidade e clareza.</strong>
            </p>
          </div>
        </div>

        <div className="func-grid">
          {features.map((f, i) => (
            <div className="func-item animate" ref={refs[i]} key={f.title}>
              <div className="func-icon">{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}