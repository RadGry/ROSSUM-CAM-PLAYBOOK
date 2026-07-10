# ROSSUM CAM Operating Playbook

A self-contained operating manual for the Commercial Account Manager seat at Rossum — grammar, competencies, worked knot library, and reference shelf.

Open `index.html` locally in a browser, or deploy to Vercel (see below).

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** → import `RadGry/ROSSUM-CAM-PLAYBOOK`.
3. Framework preset: **Other** (static site, no build step).
4. Output directory: `.` (root).
5. Deploy.

Vercel serves `index.html` at the site root automatically. No `vercel.json` or build command required.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Full playbook (HTML + CSS, no JS) |
| `CAM-Operating-Playbook.html` | Same content, kept for local editing by original filename |
