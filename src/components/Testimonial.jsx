import { useRef, useEffect } from 'react';
import DATA from '../data';
import './Testimonial.css';

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

// ─── Testimonial Component ────────────────────────────────────────────────────
export default function Testimonial() {
  const ref = useFadeIn();

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < count ? 'filled' : ''}`}>★</span>
    ));

  return (
    <section className="testimonial-section" id="testimonial">
      {/* Wave top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#f8f9fa" />
        </svg>
      </div>

      {/* Section header */}
      <div className="section-header fade-in" ref={ref}>
        <h2>Testimonial</h2>
        <p>What My Client Say About Me</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      {/* Cards */}
      <div className="testimonial-cards">
        {DATA.testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{t.text}"</p>
            <div className="testimonial-stars">{renderStars(t.rating)}</div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8f9fa" />
        </svg>
      </div>
    </section>
  );
}
