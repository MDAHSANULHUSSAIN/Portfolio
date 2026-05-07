import { useState, useEffect } from 'react';
import './styles.css';

// ── Components ────────────────────────────────────────────────────────────────
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Resume       from './components/Resume';
import CoCurricular from './components/CoCurricular';
import Blog         from './components/Blog';
import Testimonial  from './components/Testimonial';
import Contact      from './components/Contact';
import DATA         from './data';

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Resume />
        <CoCurricular />
        <Blog />
        <Testimonial />
        <Contact />
      </main>

      <footer>
        <p>© 2026 <span>{DATA.name}</span> · Built with React ⚛️</p>
      </footer>
    </>
  );
}
