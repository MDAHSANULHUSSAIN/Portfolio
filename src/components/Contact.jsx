import { useState, useRef, useEffect } from 'react';
import DATA from '../data';
import './Contact.css';

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

// ─── Contact Component ────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Section header */}
      <div className="section-header fade-in" ref={ref}>
        <h2>Contact Me</h2>
        <p>Lets Keep In Touch</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      {/* Contact box */}
      <div className="contact-box">
        {/* Left side — dark */}
        <div className="contact-left">
          <h3>Get In Touch 📧</h3>

          {/* Social icons */}
          <div className="contact-socials">
            <a href={DATA.facebook} target="_blank" rel="noreferrer" title="Facebook">f</a>
            <a href={DATA.github} target="_blank" rel="noreferrer" title="GitHub">gh</a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          </div>

          <p className="contact-email-label">Send Your Email Here!</p>
          <a href={`mailto:${DATA.email}`} className="contact-email">
            {DATA.email}
          </a>

          {/* Decorative bubbles */}
          <div className="contact-bubbles">
            {['💻','📧','📁','📊','💡','🤝','📱','🌐'].map((icon, i) => (
              <div className="bubble" key={i} style={{ animationDelay: `${i * 0.3}s` }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right side — form */}
        <div className="contact-right">
          {sent ? (
            <div className="contact-success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button className="btn-send" onClick={handleSubmit}>
                send ✈
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
