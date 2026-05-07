import { useState, useRef, useEffect } from 'react';
import DATA from '../data';
import './Resume.css';

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

// ─── Resume Component ─────────────────────────────────────────────────────────
export default function Resume() {
  const [activeTab, setActiveTab] = useState('education');
  const ref = useFadeIn();

  const tabs = [
    { id: 'education',    label: 'Education',          icon: '🎓' },
    { id: 'work',         label: 'Work History',        icon: '💼' },
    { id: 'skills',       label: 'Programming Skills',  icon: '💻' },
    { id: 'projects',     label: 'Projects',            icon: '📊' },
    { id: 'achievements', label: 'Achievements',        icon: '🏆' },
    { id: 'interests',    label: 'Interests',           icon: '🎨' },
  ];

  return (
    <section className="resume-section" id="resume">
      {/* Section header */}
      <div className="section-header fade-in" ref={ref}>
        <h2>Resume</h2>
        <p>My formal Bio Details</p>
        <div className="section-divider">
          <span /><span /><span />
        </div>
      </div>

      {/* Resume body */}
      <div className="resume-body">
        {/* Sidebar tabs */}
        <div className="resume-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`resume-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="resume-panel">

          {/* ── Education ── */}
          {activeTab === 'education' && (
            <div className="panel-content">
              {DATA.education.map((edu, i) => (
                <div className="timeline-item" key={i}>
                  <span className="timeline-dot" />
                  <div className="timeline-info">
                    <div className="timeline-header">
                      <h4>{edu.institution}</h4>
                      <span className="timeline-year">{edu.year}</span>
                    </div>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Work History ── */}
          {activeTab === 'work' && (
            <div className="panel-content">
              {DATA.workHistory.map((job, i) => (
                <div className="timeline-item" key={i}>
                  <span className="timeline-dot" />
                  <div className="timeline-info">
                    <div className="timeline-header">
                      <h4>{job.company}</h4>
                      <span className="timeline-year">{job.year}</span>
                    </div>
                    <p>{job.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Programming Skills ── */}
          {activeTab === 'skills' && (
            <div className="panel-content">
              {DATA.skills.map((skill, i) => (
                <div className="skill-row" key={i}>
                  <div className="skill-label-row">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Projects ── */}
          {activeTab === 'projects' && (
            <div className="panel-content">
              {DATA.projects.map((proj, i) => (
                <div className="timeline-item" key={i}>
                  <span className="timeline-dot" />
                  <div className="timeline-info">
                    <div className="timeline-header">
                      <h4>
                        {proj.link && proj.link !== '#' ? (
                          <a href={proj.link} target="_blank" rel="noreferrer" className="proj-github-link">
                            {proj.title}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft:'6px',verticalAlign:'middle'}}>
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                          </a>
                        ) : proj.title}
                      </h4>
                      <span className="timeline-year">{proj.year}</span>
                    </div>
                    <p>{proj.description}</p>
                    <div className="proj-tags">
                      {proj.tags.map((t) => (
                        <span className="proj-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    {proj.link && proj.link !== '#' && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="proj-github-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Achievements ── */}
          {activeTab === 'achievements' && (
            <div className="panel-content">
              {DATA.achievements.map((ach, i) => (
                <div className="achievement-card" key={i}>
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-info">
                    <div className="achievement-header">
                      <h4>{ach.title}</h4>
                      <span className="timeline-year">{ach.year}</span>
                    </div>
                    <p className="achievement-issuer">{ach.issuer}</p>
                    {ach.image && (
                      <div className="cert-img-wrap">
                        <img src={ach.image} alt={ach.title} className="cert-img" />
                      </div>
                    )}
                    {ach.link && ach.link !== '#' && (
                      <a href={ach.link} target="_blank" rel="noreferrer" className="cert-link">
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Interests ── */}
          {activeTab === 'interests' && (
            <div className="panel-content interests-grid">
              {DATA.interests.map((item, i) => (
                <div className="interest-card" key={i}>
                  <span className="interest-dot" />
                  {item}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
