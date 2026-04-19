export interface Feature {
  title: string
  description: string
  icon: string
}

export type StackCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'AI/ML'
  | 'Cloud'
  | 'Data'
  | 'Analytics'

export interface StackItem {
  name: string
  category: StackCategory
}

export interface Project {
  slug: string
  name: string
  type: string
  tagline: string
  videoId?: string          // YouTube video ID (e.g. "FMfKwNMo59U")
  overview: string
  problem: string[]
  solution: string
  features: Feature[]
  stack: StackItem[]
  impact: string[]
  learned: { technical: string[]; product: string[] }
  access: { github?: string; privateNote?: string }
}

export const projects: Project[] = [
  {
    slug: 'prepareup',
    name: 'PrepareUp',
    type: 'Full-Stack · AI Product',
    tagline: 'Course content to structured study guides — automatically.',
    videoId: 'FMfKwNMo59U',
    overview:
      'PrepareUp is an AI-driven web application that converts course materials and Discord discussions into structured, digestible study guides. Built with a GPT-4 powered content pipeline, it maps raw input to rubric-aligned outputs and delivers them through a clean, authenticated interface — making exam prep systematic instead of scattered.',
    problem: [
      'Students spend hours manually synthesizing content from PDFs, slides, and Discord with no unified workflow',
      'Valuable insights buried in Discord threads are nearly impossible to surface and organize at scale',
      'Existing note-taking tools don\'t bridge the gap between unstructured input and rubric-aligned study output',
      'No feedback loop existed to understand which content areas students actually engaged with most',
    ],
    solution:
      'Built a full-stack application where users upload course materials and connect Discord servers. A Flask backend orchestrates a GPT-4 content pipeline that reads, chunks, and maps inputs against course rubrics to produce structured study guides. Files are stored in AWS S3 and served through a React frontend with OAuth2 authentication. User engagement is captured and analyzed via EDA to drive feature prioritization.',
    features: [
      {
        title: 'GPT-4 Content Pipeline',
        description:
          'Processes raw course material and Discord threads through rubric-aware prompts to produce structured, exam-ready study guides.',
        icon: '🤖',
      },
      {
        title: 'Discord Integration',
        description:
          'Connects to Discord servers to ingest discussion threads, surface key insights, and fold them into study output automatically.',
        icon: '💬',
      },
      {
        title: 'Rubric-Based Mapping',
        description:
          'Content is mapped to course rubrics and learning objectives, ensuring outputs are targeted to what actually gets assessed — not just comprehensive summaries.',
        icon: '🗂️',
      },
      {
        title: 'AWS S3 Storage',
        description:
          'Persistent storage for uploaded materials and generated guides — accessible across sessions and shareable with peers.',
        icon: '☁️',
      },
      {
        title: 'OAuth2 Authentication',
        description:
          'Secure user accounts with OAuth2, protecting uploaded materials and personalizing each user\'s guide history.',
        icon: '🔐',
      },
      {
        title: 'Engagement Analytics',
        description:
          'Tracked user engagement patterns via EDA to understand which features drove retention and inform the product roadmap.',
        icon: '📊',
      },
    ],
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Flask', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'AWS S3', category: 'Cloud' },
      { name: 'ChatGPT API', category: 'AI/ML' },
      { name: 'OAuth2', category: 'Backend' },
      { name: 'Python', category: 'Backend' },
      { name: 'Pandas', category: 'Data' },
    ],
    impact: [
      'Automated study guide generation from raw course materials — eliminating hours of manual synthesis per exam cycle',
      'EDA on engagement patterns directly shaped the product roadmap, prioritizing features with the highest retention impact',
      'Rubric-aligned outputs meant guides were targeted to assessed content, not just everything in the syllabus',
      'Discord integration became the primary differentiator — users cited it as the feature that made the tool genuinely different',
    ],
    learned: {
      technical: [
        'GPT-4 prompt engineering for structured output — temperature tuning, few-shot prompting, and output validation',
        'OAuth2 implementation including token refresh flows and secure session handling from scratch',
        'S3 file lifecycle management: upload handling, versioning, and pre-signed URL delivery',
        'Flask architecture for async content pipelines with clean separation between ingestion and generation',
      ],
      product: [
        'EDA as a product tool — engagement data surfaced which features users actually used vs. what we assumed they needed',
        'The gap between "technically works" and "actually usable" — rubric mapping only landed when made explicit in the UI',
        'Discord integration was underrated at the start: the features that feel niche often have the highest impact for the right users',
      ],
    },
    access: {
      privateNote:
        'This project is in a private repository. Source code is available upon request — reach out via the contact form.',
    },
  },
  {
    slug: 'client-tracker',
    name: 'Client Assistance & Equipment Loaning Tracker',
    type: 'Full-Stack · Operations Tool',
    tagline: 'Real-time visibility into equipment loans — replacing manual workflows entirely.',
    overview:
      'A web-based operations tracker built for a university business institution to replace error-prone paper-based equipment management. The system gives staff instant, role-aware visibility into all active loans and client assistance requests — reducing tracking errors by 30% and eliminating the manual reconciliation work that consumed staff time.',
    problem: [
      'Paper-based tracking led to lost equipment, double-bookings, and zero visibility into real-time loan status',
      'Staff spent significant time on manual reconciliation instead of actual client service',
      'No audit trail existed — when equipment went missing, there was no way to trace it back',
      'Different staff roles needed different views, which a shared spreadsheet couldn\'t provide',
    ],
    solution:
      'Designed and built a Flask web application with a MySQL schema optimized for loan tracking. A REST API handles all CRUD operations for equipment, clients, and loan records. The frontend delivers role-aware interfaces — front desk staff see active loans and quick-return flows; admins see full audit logs and overdue reports. Every action is timestamped and attributed, creating a permanent audit trail.',
    features: [
      {
        title: 'Real-Time Equipment Tracking',
        description:
          'Live status for all equipment — checked out, available, overdue — visible across all staff terminals the moment a record updates.',
        icon: '📡',
      },
      {
        title: 'Role-Based Access',
        description:
          'Front desk view for quick loan creation and returns; admin view for full audit logs, overdue management, and reporting.',
        icon: '👥',
      },
      {
        title: 'Client Request Management',
        description:
          'Tracks client assistance requests alongside equipment loans in a unified interface — no context-switching between systems.',
        icon: '📋',
      },
      {
        title: 'Full Audit Trail',
        description:
          'Every loan action is logged — who checked out what, when, and who processed the return. Accountability built in from day one.',
        icon: '🔍',
      },
      {
        title: 'Overdue Alerts',
        description:
          'Automatic flagging of overdue equipment with escalation visibility for admins — no more manually chasing returns.',
        icon: '⚠️',
      },
    ],
    stack: [
      { name: 'Flask', category: 'Backend' },
      { name: 'MySQL', category: 'Database' },
      { name: 'REST API', category: 'Backend' },
      { name: 'Python', category: 'Backend' },
      { name: 'HTML/CSS', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
    ],
    impact: [
      'Reduced tracking errors by 30% — eliminating the double-bookings and lost equipment incidents that plagued the paper system',
      'Eliminated manual reconciliation entirely — staff now spend time on service, not spreadsheet cleanup',
      'Admin visibility into overdue loans improved equipment recovery rate and staff accountability across the institution',
    ],
    learned: {
      technical: [
        'Database schema design for operational tracking — normalization tradeoffs between query performance and update simplicity',
        'REST API design for CRUD-heavy operational tools — endpoint naming, status codes, and consistent error handling',
        'Session management in Flask for role-based access without a heavy auth framework',
      ],
      product: [
        'Operational tools have different UX requirements than consumer apps — speed and clarity matter more than aesthetics',
        'The most-used admin feature (audit trail) was an afterthought in the initial design — real workflows reveal priorities that wireframes miss',
        'Shadowing staff before writing a line of code completely changed the data model — designing for real workflows, not assumed ones',
      ],
    },
    access: {
      privateNote:
        'This project is in a private repository. Source code is available upon request — reach out via the contact form.',
    },
  },
  {
    slug: 'marketmind',
    name: 'MarketMind',
    type: 'Data / FinTech · Analytics Tool',
    tagline: 'Financial signals, distilled into decisions.',
    overview:
      'MarketMind is a market intelligence tool built to analyze financial signals and surface actionable insights for investment-adjacent decision-making. Designed analytics-first — with modular layers for ingestion, signal processing, and stakeholder-ready visualization — it shortens the distance between raw data and confident decisions.',
    problem: [
      'Financial signals are complex, scattered, and require significant manual effort to synthesize into actionable insights',
      'Analysts spend the majority of their time on data wrangling rather than generating the insights that matter',
      'Existing tools are either too heavy for quick decision support or too surface-level to be analytically rigorous',
      'Stakeholder reporting requires a separate visualization step that breaks the analysis-to-decision workflow',
    ],
    solution:
      'Built a modular analytics pipeline that ingests market data, processes signals with Python and Pandas, and surfaces results through a Tableau visualization layer optimized for fast stakeholder consumption. Separating ingestion, processing, and presentation makes each layer independently maintainable — and means new data sources or output formats can be added without rebuilding the pipeline.',
    features: [
      {
        title: 'Signal Processing Pipeline',
        description:
          'Python + Pandas pipeline that ingests, cleans, and processes financial data into structured signal outputs ready for analysis.',
        icon: '📈',
      },
      {
        title: 'Stakeholder Visualizations',
        description:
          'Tableau dashboards designed for decision-makers — optimized for clarity and fast insight extraction, not raw data exploration.',
        icon: '📊',
      },
      {
        title: 'Modular Ingestion Layer',
        description:
          'Handles multiple data sources and formats with consistent normalization output — add a new source without touching downstream logic.',
        icon: '🔄',
      },
      {
        title: 'SQL Analytics Layer',
        description:
          'Structured query layer for aggregation and filtering — enabling ad-hoc analysis without re-running the full pipeline.',
        icon: '🗄️',
      },
    ],
    stack: [
      { name: 'Python', category: 'Backend' },
      { name: 'Pandas', category: 'Data' },
      { name: 'NumPy', category: 'Data' },
      { name: 'SQL', category: 'Database' },
      { name: 'Tableau', category: 'Analytics' },
    ],
    impact: [
      'Distilled complex market signals into stakeholder-ready visualizations — enabling faster, data-backed decision-making without an analyst in the room',
      'Modular pipeline architecture reduced time-to-insight and made the system extensible for new data sources',
      'Non-technical stakeholders could interpret outputs directly — closing the translation gap between analysis and action',
    ],
    learned: {
      technical: [
        'Financial data pipeline design: normalization strategies for heterogeneous data sources at different update frequencies',
        'Tableau advanced features — calculated fields, parameter controls, and action filters for interactive dashboards',
        'SQL optimization for aggregation-heavy analytical queries at scale',
      ],
      product: [
        'Designing for decision-making vs exploration — the two have fundamentally different UX and information hierarchy requirements',
        'The visualization layer matters as much as the analysis — insights that can\'t be communicated clearly don\'t create value',
        'Separation of concerns in analytics pipelines isn\'t just good engineering — it\'s what makes fast iteration possible',
      ],
    },
    access: {
      privateNote:
        'This project is in a private repository. Source code is available upon request — reach out via the contact form.',
    },
  },
  {
    slug: 'nyc-taxi',
    name: 'NYC Taxi Trip Duration Prediction',
    type: 'Machine Learning · Data Science',
    tagline: 'R² near 1.0. 70% error reduction. 3.4M records.',
    overview:
      'An end-to-end machine learning pipeline trained on 3.4M+ NYC taxi records to predict trip duration. The project covers the full ML lifecycle: raw data ingestion, exploratory analysis, cyclical feature engineering, k-NN regression with hyperparameter tuning, and cross-validated evaluation — achieving R² near 1.0 and a 70% reduction in prediction error over a naive baseline.',
    problem: [
      'Predicting trip duration requires handling complex temporal patterns — rush hour and day-of-week effects that linear encodings misrepresent',
      'Raw taxi data contains 3.4M+ records with missing values, outliers, and features that require domain-informed engineering before modeling',
      'Naive baseline models fail to capture cyclical time patterns — treating hour 23 and hour 0 as maximally different when they\'re temporally adjacent',
      'Model evaluation without proper cross-validation leads to overfitting and misleading performance claims',
    ],
    solution:
      'Built a full ML pipeline from raw data ingestion through cross-validated evaluation. Applied sine/cosine encoding to time features to properly represent their cyclical nature. Trained a k-NN regressor with grid search over k values and distance metrics. Validated with k-fold cross-validation and compared against a naive mean-duration baseline — making the performance story concrete and honest.',
    features: [
      {
        title: 'Cyclical Feature Engineering',
        description:
          'Sine/cosine encoding of hour, day-of-week, and month — preserving the circular nature of time and fixing a core failure point of standard linear encodings.',
        icon: '🔄',
      },
      {
        title: 'k-NN Regression + Tuning',
        description:
          'Grid search hyperparameter tuning over k values and distance metrics — selecting the optimal model through systematic, cross-validated comparison.',
        icon: '🎯',
      },
      {
        title: '3.4M Record Pipeline',
        description:
          'Full data pipeline handling 3.4M+ records with missing value imputation, outlier detection, and memory-efficient processing.',
        icon: '⚡',
      },
      {
        title: 'Visual Diagnostics',
        description:
          'Residual plots, prediction vs. actual scatter plots, and feature visualizations — diagnosing model behavior, not just reporting metrics.',
        icon: '🔬',
      },
      {
        title: 'Cross-Validated Evaluation',
        description:
          'k-fold cross-validation with explicit baseline comparison — R² near 1.0 and a 70% error reduction over the naive duration mean predictor.',
        icon: '✅',
      },
    ],
    stack: [
      { name: 'Python', category: 'Backend' },
      { name: 'Scikit-learn', category: 'AI/ML' },
      { name: 'Pandas', category: 'Data' },
      { name: 'NumPy', category: 'Data' },
      { name: 'Matplotlib', category: 'Analytics' },
      { name: 'k-NN Regression', category: 'AI/ML' },
      { name: 'Feature Engineering', category: 'AI/ML' },
    ],
    impact: [
      'Achieved R² near 1.0 — near-perfect prediction performance validated across k-fold cross-validation, not just a single train/test split',
      '70% reduction in prediction error compared to a naive mean-duration baseline — a quantified, meaningful improvement with an honest reference point',
      'Cyclical time encoding was the single highest-impact decision — directly responsible for the majority of the error reduction over standard approaches',
    ],
    learned: {
      technical: [
        'Cyclical feature encoding: why linear time representations fail and how sine/cosine transformation fixes it at the geometry level',
        'k-NN behavior at scale — computational cost tradeoffs, distance metric sensitivity, and the importance of feature scaling before fitting',
        'Baseline models are not optional: without a naive comparator, "R² near 1.0" is an incomplete and potentially misleading result',
        'Cross-validation rigor — using k-fold correctly to prevent data leakage between train and validation splits',
      ],
      product: [
        'Visual diagnostics are as important as metrics — residual patterns revealed systematic over-prediction on short trips that aggregate metrics alone masked',
        'The full ML lifecycle matters as much as the model — data quality, feature decisions, and evaluation rigor each contribute equally to a credible result',
        'Communicating model performance requires context: the metric only means something next to the baseline it beat',
      ],
    },
    access: {
      github: 'https://github.com/sanyatisharma',
      privateNote: 'Repository available on GitHub — link above.',
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
