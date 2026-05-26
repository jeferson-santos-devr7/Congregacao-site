import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Objetivos from './components/Objetivos';
import Tecnologias from './components/Tecnologias';
import Funcionalidades from './components/Funcionalidades';
import Impacto from './components/Impacto';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Objetivos />
      <Tecnologias />
      <Funcionalidades />
      <Impacto />
      <Contato />
      <Footer />
    </>
  );
}