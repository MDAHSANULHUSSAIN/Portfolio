import { useRef, useEffect } from 'react';
import DATA from '../data';
import profileImg from '../assets/about.jpg';
import './About.css';

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── About Component ──────────────────────────────────────────────────────────
export default function About() {
  const ref = useFadeIn();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="about-section" id="about">
      {/* Section Header */}
      <div className="section-header fade-in" ref={ref}>
        <h2>About Me</h2>
        <p>Why Choose Me?</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      {/* Content */}
      <div className="about-content">
        {/* Photo */}
        <div className="about-img-wrapper">
          <img src={profileImg} alt="About" className="about-img" />
        </div>

        {/* Text */}
        <div className="about-text">
          <p className="about-bio">{DATA.bio}</p>

          <div className="about-highlights">
            <h4>Here are a Few Highlights:</h4>
            <ul>
              {DATA.highlights.map((item, i) => (
                <li key={i}>
                  <span className="highlight-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-btns">
            <button className="btn-accent" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
            <button className="btn-accent-outline" onClick={() => scrollTo('resume')}>
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
