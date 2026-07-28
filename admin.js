
:root {
  --bg: #07090d;
  --panel: #11151c;
  --panel-2: #171c25;
  --text: #f7f7f8;
  --muted: #aab0bb;
  --red: #d81820;
  --red-dark: #8f0e14;
  --gold: #e6b94a;
  --silver: #c5cbd3;
  --bronze: #bb7b48;
  --line: rgba(255,255,255,.10);
}
* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; background: var(--bg); color: var(--text); font-family: Arial, Helvetica, sans-serif; }
body { overflow-x: hidden; }
.shell {
  min-height: 100vh;
  padding: clamp(20px, 3vw, 48px);
  background:
    radial-gradient(circle at 80% 15%, rgba(216,24,32,.18), transparent 28%),
    linear-gradient(135deg, #050609 0%, #0d1118 56%, #090b10 100%);
}
.topbar { display:flex; justify-content:space-between; align-items:flex-start; gap:20px; margin-bottom:28px; }
.brand { display:flex; align-items:center; gap:14px; }
.mark {
  width:58px; height:58px; border-radius:14px; display:grid; place-items:center;
  background:linear-gradient(145deg,var(--red),var(--red-dark)); font-size:26px; font-weight:900;
  box-shadow:0 12px 32px rgba(216,24,32,.25);
}
.eyebrow { color:var(--red); letter-spacing:.18em; text-transform:uppercase; font-weight:800; font-size:13px; }
h1 { font-size:clamp(34px,5vw,76px); margin:6px 0 0; line-height:.95; text-transform:uppercase; letter-spacing:-.04em; }
.meta { text-align:right; color:var(--muted); font-size:14px; line-height:1.55; }
.slide { display:none; animation:fade .55s ease; }
.slide.active { display:block; }
@keyframes fade { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
.leader {
  display:grid; grid-template-columns:minmax(88px,130px) 1fr auto; align-items:center;
  gap:clamp(16px,3vw,34px); padding:clamp(22px,3vw,42px);
  background:linear-gradient(110deg,rgba(216,24,32,.95),rgba(126,12,18,.92));
  border:1px solid rgba(255,255,255,.14); border-radius:24px;
  margin-bottom:18px; box-shadow:0 24px 80px rgba(0,0,0,.35);
}
.rank-big { font-size:clamp(58px,9vw,128px); line-height:.8; font-weight:900; }
.leader .name { font-size:clamp(32px,5vw,74px); font-weight:900; text-transform:uppercase; letter-spacing:-.035em; }
.leader .amount { font-size:clamp(30px,4.2vw,64px); font-weight:900; white-space:nowrap; }
.list { display:grid; gap:10px; }
.row {
  display:grid; grid-template-columns:80px 1fr auto; align-items:center; gap:18px;
  padding:18px 24px; background:rgba(17,21,28,.90); border:1px solid var(--line);
  border-radius:16px;
}
.row .rank { font-size:30px; font-weight:900; }
.row .name { font-size:clamp(20px,2.3vw,34px); font-weight:800; text-transform:uppercase; }
.row .amount { font-size:clamp(20px,2.3vw,34px); font-weight:900; white-space:nowrap; }
.row:nth-child(1) .rank { color:var(--silver); }
.row:nth-child(2) .rank { color:var(--bronze); }
.progress { height:10px; background:rgba(255,255,255,.08); border-radius:999px; overflow:hidden; margin-top:9px; }
.progress > span { display:block; height:100%; background:var(--red); border-radius:inherit; }
.team-row { grid-template-columns:80px 1fr minmax(170px, auto); }
.dots { display:flex; justify-content:center; gap:8px; margin-top:22px; }
.dot { width:9px; height:9px; border-radius:50%; background:rgba(255,255,255,.22); }
.dot.active { width:28px; border-radius:999px; background:var(--red); }
.admin-wrap { max-width:1000px; margin:0 auto; }
.card { background:var(--panel); border:1px solid var(--line); border-radius:20px; padding:24px; margin-bottom:18px; }
.card h2 { margin:0 0 8px; font-size:24px; }
.card p { color:var(--muted); margin:0 0 18px; }
.upload-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
.upload { display:block; padding:18px; border:1px dashed rgba(255,255,255,.25); border-radius:14px; background:var(--panel-2); }
.upload span { display:block; font-weight:800; margin-bottom:8px; }
input[type=file] { width:100%; color:var(--muted); }
.actions { display:flex; flex-wrap:wrap; gap:12px; align-items:center; }
button, .button {
  border:0; border-radius:12px; padding:13px 18px; font-size:16px; font-weight:800; cursor:pointer;
  background:var(--red); color:white; text-decoration:none; display:inline-block;
}
button.secondary, .button.secondary { background:#252b35; }
.status { color:var(--muted); min-height:22px; }
table { width:100%; border-collapse:collapse; }
th, td { text-align:left; padding:12px 10px; border-bottom:1px solid var(--line); }
th { color:var(--muted); font-size:13px; text-transform:uppercase; letter-spacing:.08em; }
td:last-child, th:last-child { text-align:right; }
.note { border-left:4px solid var(--red); padding:12px 16px; background:rgba(216,24,32,.08); color:var(--muted); border-radius:0 10px 10px 0; }
@media (max-width:700px) {
  .topbar { flex-direction:column; }
  .meta { text-align:left; }
  .leader { grid-template-columns:70px 1fr; }
  .leader .amount { grid-column:2; }
  .row, .team-row { grid-template-columns:50px 1fr; }
  .row .amount { grid-column:2; }
  .upload-grid { grid-template-columns:1fr; }
}
