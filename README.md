
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>H&F Live Leaderboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="shell">
    <header class="topbar">
      <div class="brand">
        <div class="mark">H&F</div>
        <div>
          <div class="eyebrow">Live Performance Board</div>
          <h1 id="screen-title">Leaderboard</h1>
        </div>
      </div>
      <div class="meta">
        Updated <span data-updated></span><br>
        Auto-rotates every 15 seconds
      </div>
    </header>

    <section class="slide active" data-title="Monthly Leaders">
      <div id="monthly-board"></div>
    </section>
    <section class="slide" data-title="Yearly Leaders">
      <div id="yearly-board"></div>
    </section>
    <section class="slide" data-title="Team Standings">
      <div id="teams-board"></div>
    </section>

    <div class="dots" aria-label="Slide position">
      <span class="dot active"></span><span class="dot"></span><span class="dot"></span>
    </div>
  </main>
  <script src="app.js"></script>
  <script>
    const title = document.getElementById("screen-title");
    const observer = new MutationObserver(() => {
      const active = document.querySelector(".slide.active");
      title.textContent = active?.dataset.title || "Leaderboard";
    });
    document.querySelectorAll(".slide").forEach(s => observer.observe(s, {attributes:true}));
    title.textContent = document.querySelector(".slide.active").dataset.title;
  </script>
</body>
</html>
