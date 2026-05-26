import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-pattern" />
      </div>
      <div className="hero-content">
        <span className="hero-pretitle">Projeto de Comunicação Digital</span>
        <h1 className="hero-title">
          Congregação das Irmãs<br />
          <em>Servas de Nossa Senhora</em><br />
          da Anunciação
        </h1>
        <p className="hero-desc">
          Uma presença digital construída para ampliar o alcance, a missão<br />
          e a conexão da congregação com o mundo.
        </p>
        <div className="hero-actions">
          <a href="#sobre" className="btn-primary">Conheça o Projeto</a>
          <a href="#contato" className="btn-outline">Entre em Contato</a>
        </div>
        <div className="hero-scroll">
          <span />
          <p>Rolar para explorar</p>
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-inner">
          <span className="badge-cross">✦</span>
          <span>Missão</span>
          <span>Fé</span>
          <span>Serviço</span>
        </div>
      </div>
    </section>
  );
}