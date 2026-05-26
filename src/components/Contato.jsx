import { useEffect, useRef, useState } from 'react';
import './Contato.css';

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

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '', tipo: 'conhecer' });
  const r1 = useReveal(0);
  const r2 = useReveal(150);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="contato">
      <div className="contato-inner">
        <div className="contato-left animate" ref={r1}>
          <span className="section-tag">Fale Conosco</span>
          <h2>Vamos<br /><em>Conversar?</em></h2>
          <div className="divider" />
          <p>
            Estamos à disposição para conversar sobre qualquer detalhe do projeto.
            O próximo passo é simples — preencha o formulário e entraremos em contato.
          </p>

          <div className="contato-info">
            <div className="info-item">
              <span className="info-icon">💬</span>
              <div>
                <strong>Dúvidas sobre o projeto</strong>
                <p>Respondemos em até 24 horas</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🚀</span>
              <div>
                <strong>Pronto para colocar no ar?</strong>
                <p>Aprovação rápida, resultado imediato</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contato-form-wrap animate" ref={r2}>
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✦</div>
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado pelo contato. Retornaremos em breve com muito carinho.</p>
              <button onClick={() => setSent(false)} className="btn-outline-dark">Enviar outra</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contato-form">
              <div className="form-group">
                <label htmlFor="nome">Seu nome</label>
                <input id="nome" name="nome" type="text" placeholder="Como podemos te chamar?" required value={form.nome} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="tipo">Motivo do contato</label>
                <select id="tipo" name="tipo" value={form.tipo} onChange={handleChange}>
                  <option value="conhecer">Quero conhecer a congregação</option>
                  <option value="voluntariar">Tenho interesse em me voluntariar</option>
                  <option value="doacao">Gostaria de fazer uma doação</option>
                  <option value="vocacao">Estou discernindo uma vocação</option>
                  <option value="projeto">Falar sobre o projeto digital</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={4} placeholder="Escreva sua mensagem..." required value={form.mensagem} onChange={handleChange} />
              </div>
              <button type="submit" className="form-submit">
                Enviar Mensagem <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}