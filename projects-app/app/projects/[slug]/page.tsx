import { projects, getProject } from '@/data/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Sanyati Sharma`,
    description: project.tagline,
  }
}

const TOC_ITEMS = [
  { id: 'demo',     label: 'Demo' },
  { id: 'overview', label: 'Overview' },
  { id: 'problem',  label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'features', label: 'Key Features' },
  { id: 'stack',    label: 'Tech Stack' },
  { id: 'impact',   label: 'Impact' },
  { id: 'learned',  label: 'What I Learned' },
  { id: 'access',   label: 'Access' },
]

// Group stack items by category, preserving insertion order
function groupByCategory(stack: { name: string; category: string }[]) {
  const map = new Map<string, string[]>()
  for (const item of stack) {
    if (!map.has(item.category)) map.set(item.category, [])
    map.get(item.category)!.push(item.name)
  }
  return map
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const stackGroups = groupByCategory(project.stack)

  return (
    <div className="cs-root">

      {/* ── TOP NAV ── */}
      <nav className="cs-nav">
        <a href="../../" className="cs-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </a>
        <span className="cs-nav-title">{project.name}</span>
      </nav>

      {/* ── HERO ── */}
      <header className="cs-hero">
        <div className="cs-hero-inner">
          <div className="cs-type-tag">{project.type}</div>
          <h1 className="cs-hero-name">{project.name}</h1>
          <p className="cs-hero-tagline">{project.tagline}</p>
          <div className="cs-hero-stack">
            {project.stack.map((s) => (
              <span key={s.name} className="cs-hero-chip">{s.name}</span>
            ))}
          </div>
        </div>
        <div className="cs-hero-rule" />
      </header>

      {/* ── BODY: TOC + CONTENT ── */}
      <div className="cs-body">

        {/* Sticky TOC (desktop only) */}
        <aside className="cs-toc" aria-label="Page sections">
          <p className="cs-toc-heading">On this page</p>
          <nav>
            {TOC_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="cs-toc-link">
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="cs-content">

          {/* ── 00 · DEMO ── */}
          <section id="demo" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">00</span>
              <h2 className="cs-section-title">Demo</h2>
              <div className="cs-section-rule" />
            </div>
            <div className="cs-video-wrap">
              {project.videoId ? (
                <iframe
                  className="cs-video-embed"
                  src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                  title={`${project.name} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="cs-video-placeholder">
                  <div className="cs-play-btn" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                  <p className="cs-video-label">Demo video coming soon</p>
                  <p className="cs-video-sub">A full walkthrough of {project.name} will be embedded here</p>
                </div>
              )}
            </div>
          </section>

          {/* ── 01 · OVERVIEW ── */}
          <section id="overview" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">01</span>
              <h2 className="cs-section-title">Overview</h2>
              <div className="cs-section-rule" />
            </div>
            <p className="cs-prose">{project.overview}</p>
          </section>

          {/* ── 02 · PROBLEM ── */}
          <section id="problem" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">02</span>
              <h2 className="cs-section-title">Problem</h2>
              <div className="cs-section-rule" />
            </div>
            <ul className="cs-problem-list">
              {project.problem.map((item, i) => (
                <li key={i} className="cs-problem-item">
                  <span className="cs-problem-idx">0{i + 1}</span>
                  <span className="cs-problem-text">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── 03 · SOLUTION ── */}
          <section id="solution" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">03</span>
              <h2 className="cs-section-title">Solution</h2>
              <div className="cs-section-rule" />
            </div>
            <p className="cs-prose">{project.solution}</p>
            {project.solutionFlow && (
              <div className="cs-solution-flow">
                {project.solutionFlow}
              </div>
            )}
          </section>

          {/* ── 04 · FEATURES ── */}
          <section id="features" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">04</span>
              <h2 className="cs-section-title">Key Features</h2>
              <div className="cs-section-rule" />
            </div>
            <div className="cs-feature-grid">
              {project.features.map((f) => (
                <div
                  key={f.title}
                  className={[
                    'cs-feature-card',
                    f.emphasis === 'featured' && 'cs-feature-card--featured',
                    f.emphasis === 'hero'     && 'cs-feature-card--hero',
                  ].filter(Boolean).join(' ')}
                >
                  <span className="cs-feature-icon" aria-hidden="true">{f.icon}</span>
                  <h3 className="cs-feature-name">{f.title}</h3>
                  <p className="cs-feature-desc">{f.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 05 · STACK ── */}
          <section id="stack" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">05</span>
              <h2 className="cs-section-title">Tech Stack</h2>
              <div className="cs-section-rule" />
            </div>
            <div className="cs-stack-groups">
              {Array.from(stackGroups.entries()).map(([cat, names]) => (
                <div key={cat} className="cs-stack-group">
                  <span className="cs-stack-cat">{cat}</span>
                  <div className="cs-stack-tags">
                    {names.map((n) => (
                      <span key={n} className="cs-stack-tag">{n}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 06 · IMPACT ── */}
          <section id="impact" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">06</span>
              <h2 className="cs-section-title">Impact</h2>
              <div className="cs-section-rule" />
            </div>
            <ul className="cs-impact-list">
              {project.impact.map((item, i) => (
                <li key={i} className="cs-impact-item">{item}</li>
              ))}
            </ul>
          </section>

          {/* ── 07 · LEARNED ── */}
          <section id="learned" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">07</span>
              <h2 className="cs-section-title">What I Learned</h2>
              <div className="cs-section-rule" />
            </div>
            {project.learned.product.length > 0 ? (
              <div className="cs-learned-grid">
                <div className="cs-learned-col">
                  <div className="cs-learned-label">Technical</div>
                  <ul className="cs-learned-list">
                    {project.learned.technical.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="cs-learned-col">
                  <div className="cs-learned-label">Product Thinking</div>
                  <ul className="cs-learned-list">
                    {project.learned.product.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="cs-learned-col cs-learned-col--full">
                <ul className="cs-learned-list">
                  {project.learned.technical.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* ── 08 · ACCESS ── */}
          <section id="access" className="cs-section">
            <div className="cs-section-header">
              <span className="cs-section-num">08</span>
              <h2 className="cs-section-title">Access</h2>
              <div className="cs-section-rule" />
            </div>
            <div className="cs-access-card">
              <div className="cs-access-btns">
                {project.access.github && (
                  <a
                    href={project.access.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-github-btn"
                  >
                    View on GitHub
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                {project.access.demoUrl && (
                  <a
                    href={project.access.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-demo-btn"
                  >
                    Watch Demo
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
              {project.access.privateNote && (
                <p className="cs-access-note">{project.access.privateNote}</p>
              )}
              <a href="/Personal-Portfolio/#contact" className="cs-contact-cta">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </section>

        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="cs-footer">
        <p className="cs-footer-copy">© 2026 Sanyati Sharma</p>
        <a href="../../" className="cs-footer-back">← Back to Portfolio</a>
      </footer>

    </div>
  )
}
