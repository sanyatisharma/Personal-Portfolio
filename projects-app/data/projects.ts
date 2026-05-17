export interface Feature {
  title: string
  description: string
  icon: string
  emphasis?: 'featured' | 'hero'  // featured = full-width highlight, hero = highest emphasis
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
  videoId?: string           // YouTube video ID (e.g. "FMfKwNMo59U")
  overview: string
  problem: string[]
  solution: string
  solutionFlow?: string      // Short emphasized callout line e.g. "One input → Multiple outputs → Better retention"
  features: Feature[]
  stack: StackItem[]
  impact: string[]
  learned: { technical: string[]; product: string[] }  // product: [] for single-column layout
  access: { github?: string; privateNote?: string; demoUrl?: string }
}

export const projects: Project[] = [
  {
    slug: 'prepareup',
    name: 'PrepareUp',
    type: 'Full-Stack · AI Product',
    tagline: 'Listen, Revise, Retain.',
    videoId: 'FMfKwNMo59U',
    overview:
      'PrepareUp is an AI-driven web application that converts course materials and Discord discussions into structured, digestible study materials. Built with a GPT-4 powered content pipeline, it maps raw input to multiple learning formats and delivers them through a clean, authenticated interface — making exam preparation systematic instead of scattered.',
    problem: [
      'Overwhelming amounts of unstructured content across slides, notes, and Discord chats with no unified study workflow',
      'Passive study methods — reading and highlighting — that don\'t improve long-term retention',
      'Fragmented tools for notes, quizzes, flashcards, and revision that require switching between platforms',
      'No interactive, personalized learning support grounded in the student\'s own material',
    ],
    solution:
      'PrepareUp solves this through a unified AI-powered study pipeline. Upload notes or connect Discord, and the platform automatically processes and structures your content — then generates every learning format simultaneously from a single input.',
    solutionFlow: 'One input → Multiple outputs → Better retention',
    features: [
      {
        title: 'Smart Input System',
        description:
          'Upload PDFs, docs, and slides in bulk, or connect a Discord server and channel. PrepareUp automatically extracts and prepares content for every study mode — no re-uploading per format.',
        icon: '📁',
      },
      {
        title: 'Discord Integration',
        description:
          'Sync class chats instantly. PrepareUp pulls real discussions into study material, converts chats into summaries and key insights, and ensures no important information gets buried in chat history.',
        icon: '💬',
      },
      {
        title: 'Podcast Mode',
        description:
          'Converts notes into a natural, conversational audio lesson in host-and-guest format — complete with a full transcript. Enables passive learning during your commute, workout, or any moment away from a screen. Makes studying feel like a discussion, not a chore.',
        icon: '🎙️',
        emphasis: 'featured',
      },
      {
        title: 'Voice Learning — AI Tutor',
        description:
          'The most powerful feature in PrepareUp. A real-time voice interface powered by OpenAI that lets you ask questions and receive explanations instantly — grounded entirely in your own uploaded material, not generic AI responses. Ask follow-ups, go deeper, and get clarity on exactly what you\'re studying. It feels like talking to a professor who has read all your notes.',
        icon: '🗣️',
        emphasis: 'hero',
      },
    ],
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Flask', category: 'Backend' },
      { name: 'OpenAI API', category: 'AI/ML' },
      { name: 'AWS S3', category: 'Cloud' },
      { name: 'OAuth2', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Discord API', category: 'Backend' },
    ],
    impact: [
      'Reduced study time by consolidating notes, quizzes, flashcards, and revision into a single platform',
      'Unified multiple fragmented tools into one upload → every format workflow',
      'Enabled both passive (audio) and active (voice interaction) learning from the same content',
      'Introduced real-time AI tutoring grounded in user content — not generic responses',
    ],
    learned: {
      technical: [
        'Designing end-to-end AI pipelines from raw input to multiple structured output formats',
        'Building multi-modal learning systems — audio, text, interactive — from a single content source',
        'Integrating real-time voice interfaces with LLMs while keeping responses grounded in user-specific context',
        'Designing intuitive UX for AI-powered applications where the output quality isn\'t always predictable',
        'Ensuring content structure, consistency, and reliability across diverse input formats (PDFs, docs, Discord threads)',
      ],
      product: [],
    },
    access: {
      privateNote: 'Private repository — source code available upon request.',
      demoUrl: 'https://youtu.be/FMfKwNMo59U',
    },
  },
  {
    slug: 'client-tracker',
    name: 'Client Assistance & Equipment Loaning Tracker',
    type: 'Full-Stack · Operations Tool',
    tagline: 'From manual chaos to structured, role-aware equipment management.',
    overview:
      'A full-stack internal system built for Georgia State University that replaces manual tech equipment tracking with a structured digital workflow. It covers the full loan lifecycle — inventory management, loan requests, approvals, returns, and reporting — through a role-based interface that gives Admins, Staff, and Borrowers exactly what they need and nothing they don\'t. Built with React, Node.js/Express, and SQLite, it was designed to be immediately usable by non-technical staff from day one.',
    problem: [
      'Manual paper-based tracking created lost equipment, double-bookings, and zero real-time visibility into loan status',
      'No structured approval workflow — loan requests were handled ad-hoc, creating inconsistency and accountability gaps',
      'No audit trail meant there was no way to trace equipment when it went missing or was returned late',
      'Different user types (admin, staff, borrowers) needed completely different interfaces — a shared spreadsheet couldn\'t serve any of them well',
    ],
    solution:
      'Built a full-stack web application with a clean separation between a React frontend, a Node.js/Express REST API, and a SQLite database. JWT authentication gates every route and determines which UI each role sees. The backend models the full loan lifecycle as explicit state transitions — preventing invalid actions at the API level, not just the UI.',
    solutionFlow: 'Request → Approve / Deny → Return',
    features: [
      {
        title: 'Real-Time Dashboard',
        description:
          'Live stats on active inventory, pending loan requests, and overdue items — updated on every action. Admins see the full picture; staff see what needs their attention.',
        icon: '📊',
      },
      {
        title: 'Excel Import / CSV Export',
        description:
          'Admins bulk-import inventory via Excel and export overdue reports and loan history as CSV — meeting real administrative workflows without requiring technical knowledge from staff.',
        icon: '📂',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Three distinct roles — Admin, Staff, Borrower — each with a tailored UI, gated tabs, and scoped API permissions. JWT handles authentication; bcrypt handles password security. Staff can create loan applications on behalf of students. Admins control inventory and user management.',
        icon: '🔐',
        emphasis: 'featured',
      },
      {
        title: 'Loan Workflow Engine',
        description:
          'The core of the system. Borrowers submit equipment requests; Staff review and approve or deny; returns are logged and timestamped. Every state transition is explicit, auditable, and irreversible in the right places — creating a permanent accountability trail for every item in the system. Overdue tracking and dashboard alerts surface items that need action before they become problems.',
        icon: '🔄',
        emphasis: 'hero',
      },
    ],
    stack: [
      { name: 'React.js', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Vite', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'JWT', category: 'Backend' },
      { name: 'SQLite', category: 'Database' },
    ],
    impact: [
      'Replaced paper-based tracking with a structured digital workflow — eliminating lost equipment incidents and double-bookings entirely',
      'Role-based UI meant staff could use the system from day one with no training — each user type sees only what they need to act on',
      'Excel import + CSV export met real administrative workflows without requiring technical knowledge from the operations team',
      'Built for Georgia State University\'s IT Services — a real production deployment, not a prototype',
    ],
    learned: {
      technical: [
        'JWT implementation with role-based authorization enforced at both the API route and React component level',
        'Designing a REST API for a multi-step state machine (request → approve/deny → return) with clean, irreversible transitions',
        'SQLite schema design for audit-friendly queries — tracking state changes, timestamps, and attribution at every step',
        'React component architecture with strong separation between role-specific views and shared UI primitives',
      ],
      product: [
        'Operational tools need to be immediately intuitive for non-technical users — UI clarity and speed matter more than feature richness',
        'The approval workflow was the hardest to design correctly — state transitions need to be explicit, and the wrong UI affordances create real operational errors',
        'Excel/CSV I/O was scoped late but became the most-used admin feature — real-world data workflows rarely match what you assume during design',
      ],
    },
    access: {
      privateNote: 'Private repository — internal use only. Source code available upon request.',
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
