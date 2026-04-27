# Paramjit Kaur — QA Engineer Portfolio

A modern, fully-responsive personal portfolio built with **React 18 + Vite + Tailwind CSS**. All content (about, experience, skills, education, certifications, contact) is sourced from a single data file and ships as a static, single-page site.

> Live preview (after deploy): _add your URL here_

---

## ✨ Features

- ⚛️ **React 18** with functional components and hooks
- 🧭 **React Router 6** (HashRouter) — each section is its own page (`/about`, `/experience`, …) and works on any static host
- ⚡ **Vite** for fast dev/build
- 🎨 **Tailwind CSS** dark theme with brand gradient
- 📱 Mobile-first, fully responsive (mobile / tablet / desktop)
- 🎬 Subtle animations: scroll-reveal, typed text, animated counters, floating cards, particle background
- 🧩 Modular components: `Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Education`, `Certifications`, `Contact`, `Footer`
- 📂 Single source of truth in `src/data/portfolio.js` — edit one file to update the site

---

## 📁 Project structure

```
portfolio-react/
├── public/
│   └── MyImage.png            # Profile photo (served from site root)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx           # Persistent shell: Navbar + Outlet + Footer
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollToTop.jsx      # Resets scroll on route change
│   │   └── SectionHeader.jsx
│   ├── pages/                   # One file per route — thin wrappers
│   │   ├── Home.jsx             # /          → Hero
│   │   ├── AboutPage.jsx        # /about
│   │   ├── ExperiencePage.jsx   # /experience
│   │   ├── SkillsPage.jsx       # /skills
│   │   ├── EducationPage.jsx    # /education
│   │   ├── CertificationsPage.jsx # /certifications
│   │   ├── ContactPage.jsx      # /contact
│   │   └── NotFound.jsx         # *
│   ├── data/
│   │   └── portfolio.js         # 👈 All site content lives here
│   ├── hooks/
│   │   ├── useReveal.js         # Scroll-reveal, re-runs on route change
│   │   └── useTypedText.js      # Typewriter effect for hero roles
│   ├── App.jsx                  # HashRouter + Routes
│   ├── main.jsx
│   └── index.css                # Tailwind + custom utilities
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Run locally

> Requires **Node.js 18+** and npm. Get Node from <https://nodejs.org/>.

```bash
# 1. Move into the project folder
cd portfolio-react

# 2. Install dependencies (only once)
npm install

# 3. Start the dev server
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173/`) — open it in your browser. Edits to any `.jsx` / `.css` / data file hot-reload instantly.

### Build for production

```bash
npm run build      # outputs static site to /dist
npm run preview    # serves the built site locally to verify
```

---

## ✏️ Updating content

Almost everything is driven by `src/data/portfolio.js`. To change a job, add a skill, etc., edit that file — no component code required.

| Want to update…       | Edit                                                  |
| --------------------- | ----------------------------------------------------- |
| Name, title, links    | `profile` object                                      |
| Hero stats            | `stats` array                                         |
| About bio + highlights| `about` object                                        |
| Work history          | `experience` array                                    |
| Skill categories/bars | `skillCategories` array                               |
| Schools / degrees     | `education` array                                     |
| Certs                 | `certifications` array                                |
| Contact info          | `contact` object                                      |
| Nav menu              | `navLinks` array                                      |
| Profile photo         | Replace `public/MyImage.png` (keep the filename)      |

> **Placeholders to fill in:**
> - `profile.links.email` — set your real address
> - `profile.links.github` — set your GitHub URL once your repo is up

---

## 🐙 Push to GitHub (beginner-friendly)

> One-time setup: install Git from <https://git-scm.com/>, create a free GitHub account at <https://github.com>, and tell Git who you are:
>
> ```bash
> git config --global user.name "Paramjit Kaur"
> git config --global user.email "you@example.com"
> ```

### 1. Initialize Git in the project folder

```bash
cd portfolio-react
git init
git branch -M main
```

### 2. Create the repo on GitHub

1. Go to <https://github.com/new>.
2. **Repository name:** `paramjit-kaur-portfolio` (or any name you like).
3. Choose **Public** so others (recruiters!) can see it.
4. **Do not** check “Add a README” / “.gitignore” / “license” — your project already has them.
5. Click **Create repository**.
6. On the next page, copy the HTTPS URL (looks like `https://github.com/<your-username>/paramjit-kaur-portfolio.git`).

### 3. Connect local → remote

```bash
git remote add origin https://github.com/<your-username>/paramjit-kaur-portfolio.git
```

(Run `git remote -v` to confirm.)

### 4. Stage, commit, and push

```bash
git add .
git commit -m "Initial commit: React portfolio"
git push -u origin main
```

The first time you push, GitHub will prompt for your username and a **personal access token** (used as the password). Create one here: <https://github.com/settings/tokens?type=beta> (give it the `repo` scope).

### 5. Future updates

```bash
git add .
git commit -m "Update: <what changed>"
git push
```

---

## 🌐 Deploy your portfolio

### Option A — Vercel (recommended, zero config)

1. Sign up at <https://vercel.com> with your GitHub account.
2. Click **Add New → Project**, pick your portfolio repo, and click **Deploy**.
3. Vercel auto-detects Vite, builds, and assigns a free `*.vercel.app` URL. Every push to `main` redeploys automatically.

> Make sure `vite.config.js` keeps `base: '/'` for Vercel.

### Option B — GitHub Pages

1. Edit `vite.config.js` and change `base: '/'` to `base: '/<your-repo-name>/'` (e.g. `'/paramjit-kaur-portfolio/'`).
2. Build and publish:
   ```bash
   npm run build
   npm run deploy
   ```
   This pushes `dist/` to a `gh-pages` branch via the `gh-pages` package (already in `devDependencies`).
3. On GitHub, go to **Settings → Pages**, choose **Branch: gh-pages**, **Folder: /(root)**, click **Save**.
4. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Option C — Netlify

1. Sign up at <https://netlify.com> with GitHub.
2. **Add new site → Import an existing project**, pick the repo.
3. **Build command:** `npm run build`. **Publish directory:** `dist`. Click **Deploy**.

---

## 🛠 Tech stack

- React 18 + Vite 5
- Tailwind CSS 3
- `lucide-react` for icons
- `gh-pages` for one-command GitHub Pages deploys

---

## 📜 License

Personal portfolio — content © Paramjit Kaur. Code freely reusable as a template.
