import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-cross">✦</span>
          <h3>Irmãs Servas de Nossa<br />Senhora da Anunciação</h3>
          <p>Missão · Fé · Serviço</p>
        </div>
        <div className="footer-links">
          <strong>Navegação</strong>
          <a href="#sobre">Sobre</a>
          <a href="#objetivos">Objetivos</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#impacto">Impacto</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-contact">
          <strong>Contato</strong>
          <p>Entre em contato para conhecer<br />mais sobre nossa missão.</p>
          <a href="#contato" className="footer-cta">Fale Conosco →</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Congregação das Irmãs Servas de Nossa Senhora da Anunciação. Todos os direitos reservados.</p>
        <p className="footer-tech">Desenvolvido com React + Vite</p>
      </div>
    </footer>
  );
}