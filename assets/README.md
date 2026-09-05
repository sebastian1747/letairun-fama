# Brand assets

- `fama-avatar-400.png` — X profile picture (400×400, amber disc with F on the site's dark background)
- `fama-banner-1500x500.png` — X header (1500×500; the emblem sits on the right so the profile picture does not cover it)
- `avatar.html`, `banner.html` — sources; re-render with headless Chromium:
  `chrome --headless --window-size=1500,500 --screenshot=fama-banner-1500x500.png banner.html`
