# Mahdi Noorzadeh — Auto-Synced Resume

Terminal-inspired resume site that runs entirely on **GitHub Pages**. The UI keeps the original neon visuals and sound cues, but the data is now pulled from a single JSON file that is regenerated automatically from my public LinkedIn export.

## Features

- ✅ CRT-inspired UI modeled after the *Alien* franchise terminals (folders + scrolling “shared” window)  
- ✅ Ambient “deep space” hum with retro key beeps and a SOUND: ON/OFF toggle (pure frontend audio)  
- ✅ Data-driven resume powered by `data/profile.json`  
- ✅ GitHub Action normalizes the latest LinkedIn export and commits new data nightly  
- ✅ PDF capture button (html2pdf.js) that prints the visible terminal frame  
- ✅ Fully static so it works on GitHub Pages without secrets

## Architecture

| Layer              | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `index.html`       | CRT terminal frame + folder layout                                          |
| `assets/css`       | Alien-style neon HUD styling + scanlines/glow                              |
| `assets/js/script.js` | Fetches `data/profile.json`, renders folders, types text, handles audio toggle |
| `data/profile.json` | Normalized resume data consumed by the UI                                  |
| `.github/workflows/sync-linkedin.yml` | Nightly job that downloads LinkedIn export and updates `profile.json` |
| `scripts/normalize-linkedin.mjs` | Converts the raw LinkedIn export JSON → `profile.json` schema         |

## `profile.json` Schema

```json
{
  "name": "Mahdi Noorzadeh",
  "summary": "Short intro…",
  "contacts": [{ "label": "LinkedIn", "url": "https://…" }],
  "experience": [
    {
      "role": "Back End Developer",
      "company": "Rastaar",
      "period": "Nov 2025 – Present",
      "highlights": ["Built X", "Shipped Y"]
    }
  ],
  "education": [
    {
      "school": "University…",
      "degree": "B.Sc. IT",
      "period": "2025 – 2027",
      "details": "Focus…"
    }
  ],
  "skills": ["Java", "Spring Boot", "..."],
  "languages": [{ "language": "English", "level": "C1 Advanced" }]
}
```

## Local Setup

```bash
git clone https://github.com/MahdiNoorzadeh/MahdiNoorzadeh.github.io.git
cd MahdiNoorzadeh.github.io

# Optional: regenerate profile data from a LinkedIn export
npm install
npm run normalize

# Serve locally (any static server works)
npx serve .
```

1. Drop your latest LinkedIn export JSON into `data/linkedin-source.json`.
2. Run `npm run normalize` to regenerate `data/profile.json`.
3. Commit both files (or just `profile.json` if you prefer not to keep the raw export).

## GitHub Action Automation

1. Upload your LinkedIn export somewhere reachable (e.g., a private gist or pre-signed S3 URL).  
2. In repository settings → **Secrets and variables → Actions**, add `LINKEDIN_EXPORT_URL`.  
3. The workflow (`.github/workflows/sync-linkedin.yml`) runs nightly (02:00 UTC) and on demand:  
   - Downloads the export  
   - Runs `scripts/normalize-linkedin.mjs`  
   - Commits `data/profile.json` if changes are detected  
   - GitHub Pages redeploys automatically

No secrets ever touch the frontend: the URL is only used inside GitHub Actions.

## PDF Download

- Uses [`html2pdf.js`](https://github.com/eKoopmans/html2pdf.js/) via CDN.  
- Clicking “PRINT DOSSIER” captures the terminal frame exactly as rendered (with folders + viewer).  
- SOUND button stays respected (muted noise won’t be embedded in PDF of course 😀).

## Deployment

1. Push to `main`.  
2. Enable GitHub Pages (Settings → Pages → Deploy from `main`, root).  
3. That’s it — the site is live at `https://<username>.github.io/<repo>/`.

Every time the workflow commits a new `profile.json`, Pages rebuilds automatically and the frontend shows the latest data.

### Pre-deploy Checklist

1. **LinkedIn data ready (Step 3 from setup)**: confirm `LINKEDIN_EXPORT_URL` references a downloadable JSON export.  
2. **Normalization pass**: run `npm run normalize` locally and inspect `data/profile.json` before committing.  
3. **Workflow dry run**: trigger “Sync LinkedIn Profile” from the Actions tab and ensure it finishes without errors.  
4. **Static preview**: serve locally (`npx serve .`) and verify folder navigation, typewriter animation, audio toggle, and PDF export.  
5. **Pages configured**: double-check Settings → Pages is still pointed at the root of `main`.

## Credits

- Original terminal aesthetic, neon palette, and UX cues credit **Puja Sridhar**  
  ([PujaSridhar/PujaSridhar.github.io](https://github.com/PujaSridhar/PujaSridhar.github.io)).  
- Network animation, audio implementation, JSON data flow, and automation scripts by Mahdi Noorzadeh.

Enjoy the automation! Pull requests or suggestions welcome. 🚀
