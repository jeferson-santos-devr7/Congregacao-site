import { useEffect, useRef } from 'react';
import './Tecnologias.css';

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

const techs = [
  {
    icon: '⚡',
    title: 'Node + React.js',
    desc: 'Node como framework de servidor, React como biblioteca JavaScript para interfaces dinâmicas e reativas.',
    tag: 'Core Stack',
  },
  {
    icon: '🎨',
    title: 'HTML5 & CSS3',
    desc: 'Estrutura semântica e design responsivo que se adapta a celulares, tablets e computadores com elegância.',
    tag: 'Estrutura',
  },
  {
    icon: '📱',
    title: 'Design Responsivo',
    desc: 'Layout fluido que garante uma experiência consistente independente do dispositivo utilizado pelo visitante.',
    tag: 'UX/UI',
  },
  {
    icon: '🚀',
    title: 'Performance Otimizada',
    desc: 'Páginas leves com carregamento rápido, essenciais para reter visitantes e melhorar o posicionamento nos buscadores.',
    tag: 'Velocidade',
  },
];

export default function Tecnologias() {
  const refs = techs.map((_, i) => useReveal(i * 100));
  const hdr = useReveal(0);

  return (
    <section id="tecnologias" className="tecnologias">
      <div className="tec-inner">
        <div className="tec-header animate" ref={hdr}>
          <span className="section-tag">Stack Técnico</span>
          <h2>Tecnologias<br /><em>Utilizadas</em></h2>
          <div className="divider" />
          <p className="tec-intro">
            Escolhas técnicas pensadas para desempenho, acessibilidade e experiência do usuário.
          </p>
        </div>

        <div className="tec-grid">
          {techs.map((t, i) => (
            <div className="tec-card animate" ref={refs[i]} key={t.title}>
              <div className="tec-icon">{t.icon}</div>
              <span className="tec-tag">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}