import { useState, useEffect } from 'react';
import DATA from '../data';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = DATA.typingTexts[textIndex];
    const speed = deleting ? 60 : 100;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex(i => (i + 1) % DATA.typingTexts.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      {/* Left content */}
      <div className="hero-left">
        {/* Social icons */}
        <div className="hero-socials">
          {/* Facebook */}
          <a href={DATA.facebook} target="_blank" rel="noreferrer" title="Facebook" className="social-btn social-fb">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href={DATA.github} target="_blank" rel="noreferrer" title="GitHub" className="social-btn social-gh">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="social-btn social-li">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Name */}
        <p className="hero-hello">
          Hello, I'M <span>{DATA.nickname}</span>
        </p>

        {/* Typing text */}
        <h1 className="hero-typing">
          {typedText}<span className="cursor">|</span>
        </h1>

        {/* Bio */}
        <p className="hero-bio">{DATA.bio}</p>

        {/* Buttons */}
        <div className="hero-btns">
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Hire Me
          </button>
          <button className="btn-accent" onClick={() => scrollTo('resume')}>
            Get Resume
          </button>
        </div>
      </div>

      {/* Right — profile photo */}
      <div className="hero-right">
        <div className="hero-img-wrapper">
          <img src={profileImg} alt="Profile" className="hero-img" />
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-page)" />
        </svg>
      </div>
    </section>
  );
}
