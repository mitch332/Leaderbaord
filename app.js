# H&F Live Leaderboard Prototype

## Included
- `index.html` — full-screen rotating TV display
- `admin.html` — upload page for Monthly, Yearly, and five team CSV reports
- `styles.css`, `app.js`, `admin.js`
- `data.json` — sample data generated from the reports supplied on July 28, 2026

## Test it
Because browsers can block local JavaScript files when opened directly, run a tiny local web server:

### Windows
1. Extract the ZIP.
2. Open Command Prompt inside the extracted folder.
3. Run: `python -m http.server 8000`
4. Visit:
   - TV display: `http://localhost:8000/index.html`
   - Admin: `http://localhost:8000/admin.html`

## Current behavior
- Rotates Monthly Leaders, Yearly Leaders, and Team Standings every 15 seconds.
- Uses `Rep` for names and `Sold` for ranking/totals.
- Uploads are stored only in that browser using local storage.

## Production step
To make updates sync to all TVs, connect the upload page to a hosted database and deploy the site. Suitable options include Vercel + Supabase or another web host/database combination.
