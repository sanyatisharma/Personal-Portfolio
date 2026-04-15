# Sanyati Sharma — Personal Portfolio

A personal portfolio website built to reflect my work as a data analyst, full-stack builder, and strategic thinker. Designed for recruiters across analytics, engineering, and product roles.

## 🔗 Live Site
> _Deploy link goes here after GitHub Pages setup (see below)_

## Tech
- HTML, CSS, JavaScript — zero dependencies, no build step
- Google Fonts: DM Serif Display · Inter · JetBrains Mono
- Fully responsive, single-file architecture

## Sections
| Section | Description |
|---|---|
| Hero | Positioning statement + key stat |
| About | Who I am, what I've worked on |
| Experience | Work history with impact metrics |
| Projects | PrepareUp · Client Tracker · MarketMind · NYC Taxi ML |
| Leadership | AI & FinTech Club · STARS Ignite · Indian Cultural Club |
| Contact | Email, LinkedIn, GitHub + contact form |

## Project Structure
```
Portfolio/
├── index.html          # Full single-file portfolio
├── README.md
├── .gitignore
└── assets/
    └── images/         # Leadership & project photos go here
```

## Adding Photos
The leadership section supports click-to-upload photos directly in the browser. To persist photos across sessions, save your images to `assets/images/` and update the `<img>` `src` attributes in `index.html`.

## Deploying via GitHub Pages
1. Push this repo to GitHub (see `git-setup.sh`)
2. Go to **Settings → Pages** in your repo
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://sanyatisharma.github.io/portfolio`

