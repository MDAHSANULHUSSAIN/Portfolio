import { useState, useRef, useEffect } from 'react';
import DATA from '../data';
import './Blog.css';

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

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const ref = useFadeIn();

  const openPost = (post) => setSelected(post);
  const closePost = () => setSelected(null);

  return (
    <section className="blog-section" id="blog">
      <div className="section-header fade-in" ref={ref}>
        <h2>My Blog</h2>
        <p>Thoughts, Ideas & Learnings</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      <div className="blog-grid">
        {DATA.blogs.map((post, i) => (
          <div className="blog-card" key={i} onClick={() => openPost(post)}>
            <div className="blog-category">{post.category}</div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">📅 {post.date}</p>
            <p className="blog-summary">{post.summary}</p>
            <div className="blog-tags">
              {post.tags.map((t) => (
                <span className="blog-tag" key={t}>{t}</span>
              ))}
            </div>
            <button className="blog-read-btn">Read More →</button>
          </div>
        ))}
      </div>

      {/* Modal / Full post */}
      {selected && (
        <div className="blog-modal-overlay" onClick={closePost}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closePost}>✕</button>
            <span className="blog-category">{selected.category}</span>
            <h2 className="blog-modal-title">{selected.title}</h2>
            <p className="blog-date">📅 {selected.date}</p>
            <div className="blog-modal-content">
              {selected.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="blog-tags" style={{marginTop:'1.5rem'}}>
              {selected.tags.map((t) => (
                <span className="blog-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
