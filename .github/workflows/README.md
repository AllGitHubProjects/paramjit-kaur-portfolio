# GitHub Actions — auto-deploy

Workflows in this folder run automatically on GitHub. **You don't run them locally** — GitHub picks them up the moment you push.

## What's here

| File          | When it runs                          | What it does                                      |
| ------------- | ------------------------------------- | ------------------------------------------------- |
| `deploy.yml`  | Every push to `main` (or run by hand) | Builds the Vite site and publishes to GitHub Pages|

---

## Step-by-step: turn this on

### 1. Push your code to GitHub
Follow the **"Push to GitHub"** section in the project `README.md`. You should end up with the repo on github.com containing this `.github/workflows/deploy.yml` file.

### 2. Enable GitHub Pages on the repo

1. On GitHub, open your repo.
2. Click **Settings** (top right, gear icon).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
   _(Not "Deploy from a branch" — we use the modern Actions-based deploy.)_
5. Save. There's no URL yet — that's normal until the first deploy finishes.

### 3. Trigger the first deploy

Two options — either works:

- **Push any commit to `main`** (even editing the README counts).
  ```bash
  git commit --allow-empty -m "Trigger first Pages deploy"
  git push
  ```
- **Or run it manually**: repo → **Actions** tab → **Deploy to GitHub Pages** → **Run workflow** → pick `main` → **Run workflow**.

### 4. Watch it build

1. Open the **Actions** tab on your repo.
2. Click the running workflow. You'll see two jobs: **build** then **deploy**.
3. First run takes ~1–2 minutes. ✅ green check on both = done.

### 5. Visit your live site

Click the **deploy** job → the summary shows the URL, or open
`https://<your-username>.github.io/<your-repo-name>/`

From now on, every `git push` to `main` redeploys automatically. 🎉

---

## How it works (quick tour of `deploy.yml`)

- `on: push: branches: [main]` — triggers on every push to `main`.
- `workflow_dispatch` — also lets you click "Run workflow" manually.
- `permissions:` — grants the workflow the rights the official Pages deploy action needs.
- `concurrency:` — if a new commit arrives mid-deploy, the older one is cancelled to avoid clobbering.
- **build** job: installs deps, builds the site with `VITE_BASE_PATH=/<repo-name>/` so asset URLs match the Pages subpath, uploads `dist/` as an artifact.
- **deploy** job: takes that artifact and ships it to Pages.

---

## Common issues

**404 on the page itself or blank screen / missing assets**
Means the `base` path is wrong. The workflow sets it for you via `VITE_BASE_PATH`. If you use the manual `npm run deploy` instead, you'll need to set `base` in `vite.config.js` to `'/<repo-name>/'` yourself.

**Workflow says "Resource not accessible by integration"**
The Pages source isn't set to **GitHub Actions**. Repeat step 2.

**Profile image / favicon doesn't show up on the deployed site**
Confirm `MyImage.png` is committed inside `public/` and that the file isn't in `.gitignore`.

---

## What about Vercel?

Vercel doesn't need a GitHub Actions workflow — its own GitHub app handles auto-deploys.
1. Sign in to <https://vercel.com> with GitHub.
2. **Add New → Project**, pick the repo, click **Deploy**.
3. Done. Every push to `main` triggers a new Vercel deploy automatically.

If you go the Vercel route, you can leave `deploy.yml` in place (it does no harm) or delete it if you don't want two deploys per push.
