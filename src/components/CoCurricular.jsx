import { useRef, useEffect } from 'react';
import DATA from '../data';
import './CoCurricular.css';

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

export default function CoCurricular() {
  const ref = useFadeIn();

  return (
    <section className="co-section" id="co-curricular">
      <div className="section-header fade-in" ref={ref}>
        <h2>Co-Curricular Activities</h2>
        <p>Beyond the Classroom</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      <div className="co-grid">
        {DATA.coCurricular.map((item, i) => (
          <div className="co-card" key={i}>
            <div className="co-card-header">
              <div>
                <h3 className="co-title">{item.title}</h3>
                <p className="co-org">{item.organization}</p>
              </div>
              <span className="co-year">{item.year}</span>
            </div>
            <p className="co-desc">{item.description}</p>

            {/* Activity photo */}
            {item.image && (
              <div className="co-img-wrap">
                <img src={item.image} alt={item.title} className="co-img" />
              </div>
            )}

            {/* Certificate */}
            {item.certificate && (
              <div className="co-cert-wrap">
                <p className="co-cert-label">📜 Certificate</p>
                <img src={item.certificate} alt="Certificate" className="co-cert-img" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
