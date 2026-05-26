import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#objetivos', label: 'Objetivos' },
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#impacto', label: 'Impacto' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-brand">
        <span className="brand-icon">✦</span>
        <span>Irmãs Servas</span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li><a href="#contato" className="nav-cta" onClick={() => setMenuOpen(false)}>Entre em Contato</a></li>
      </ul>
    </nav>
  );
}