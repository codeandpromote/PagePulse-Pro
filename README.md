<div align="center">

<img src="store-assets/icon-128.svg" width="80" height="80" alt="PagePulse Pro Icon" />

# PagePulse Pro

**Website Speed & SEO Analyser — Free Chrome Extension**

Real Core Web Vitals · 14-Point SEO Audit · AI Fix Guide · PDF Export

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=flat-square)](https://developer.chrome.com/docs/extensions/mv3/)
[![License](https://img.shields.io/badge/License-MIT-FBBC04?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-EA4335?style=flat-square)](manifest.json)

</div>

---

## What It Does

PagePulse Pro sits in your Chrome toolbar and audits any webpage in under 3 seconds — no sign-up, no API key, no configuration.

| Feature | Details |
|---|---|
| ⚡ **Speed Analysis** | LCP, CLS, TBT, FCP, TTFB, Speed Index via Google PageSpeed Insights API |
| 🔍 **SEO Audit** | 14-point on-page checklist with actual values, not just pass/fail |
| 🤖 **AI Fix Guide** | Specific, code-level fix suggestions for every issue found |
| 📥 **PDF Export** | Download polished reports for clients or your own records |
| 📋 **History** | Automatic local storage of past audits — nothing leaves your device |

---

## Screenshots

<div align="center">
<img src="store-assets/screenshot-1.html" width="640" alt="Speed Analysis" />
</div>

> Open the HTML files in `store-assets/` in a browser to preview each screenshot design.

---

## Project Structure

```
PagePulse-Pro/
│
├── manifest.json          # Extension manifest (MV3)
├── popup.html             # Main extension popup UI
├── popup.js               # Popup logic — speed + SEO + AI + history tabs
├── popup.css              # Popup styles
│
├── background.js          # Service worker (badge management)
├── content.js             # Content script — DOM inspection for SEO audit
│
├── welcome.html           # Onboarding page shown on first install
├── welcome.js             # Clears NEW badge on first open
│
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── lib/
│   ├── html2canvas.min.js # Used for PDF screenshot capture
│   └── jspdf.umd.min.js   # PDF generation
│
├── store-assets/          # Chrome Web Store submission assets
│   ├── screenshot-1.html  # Speed Analysis (1280×800)
│   ├── screenshot-2.html  # Core Web Vitals (1280×800)
│   ├── screenshot-3.html  # SEO Audit (1280×800)
│   ├── screenshot-4.html  # AI Fix Guide (1280×800)
│   ├── screenshot-5.html  # Export & History (1280×800)
│   ├── promo-small-440x280.html
│   ├── promo-marquee-1400x560.html
│   ├── icon-128.svg       # Store icon source
│   └── capture.js         # Puppeteer script to export PNGs
│
└── website/               # Marketing website (Next.js 14)
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx        # Landing page
    │   ├── globals.css
    │   └── privacy/
    │       └── page.tsx    # Privacy policy
    ├── tailwind.config.ts
    └── package.json
```

---

## How It Works

### Speed Analysis
Sends the active tab URL to Google's public [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started) and parses the response for both mobile and desktop Lighthouse scores. No API key is required for standard usage.

### SEO Audit
Injects `content.js` into the active tab (via the `scripting` permission) which reads the live DOM — title, meta tags, headings, images, links, canonical, Open Graph, Twitter Card, schema, and more. All processing happens in-browser; nothing is sent externally.

### AI Fix Guide
Sends only the audit results (metric values and SEO check outcomes, no page content or personal data) to a public AI endpoint to generate specific fix recommendations.

### PDF Export
Uses `html2canvas` to snapshot the popup UI and `jsPDF` to compile it into a downloadable PDF.

---

## Permissions Explained

| Permission | Why it's needed |
|---|---|
| `activeTab` | Read the URL and DOM of the tab you choose to audit |
| `storage` | Save audit history locally via `chrome.storage.local` |
| `scripting` | Inject the content script to inspect page HTML for SEO checks |
| `https://www.googleapis.com/*` | Call the PageSpeed Insights API |
| `https://text.pollinations.ai/*` | Fetch AI fix suggestions |
| `<all_urls>` | Allow the content script to run on any page you audit |

---

## Installation

### From Chrome Web Store
1. Visit the [Chrome Web Store listing](https://chrome.google.com/webstore)
2. Click **Add to Chrome**
3. Pin the extension to your toolbar via the 🧩 Extensions menu

### Load Unpacked (Development)
```bash
# Clone the repo
git clone https://github.com/sayak-biswas/PagePulse-Pro.git
cd PagePulse-Pro

# In Chrome, go to:
# chrome://extensions → Enable "Developer mode" → "Load unpacked"
# Select the PagePulse-Pro folder
```

---

## Marketing Website (Next.js)

The `website/` directory contains the marketing site built with Next.js 14, TypeScript, and Tailwind CSS.

```bash
cd website
npm install
npm run dev       # → http://localhost:3000

npm run build     # Production build
npm run start     # Serve production build
```

**Pages**
- `/` — Landing page with live-coded popup mockups, feature sections, and CTA
- `/privacy` — Full privacy policy

---

## Store Assets

All Chrome Web Store submission assets are in `store-assets/`. To export them as PNGs:

```bash
cd store-assets
npm install puppeteer
node capture.js
```

Or open any `.html` file in Chrome and use **DevTools → Capture full size screenshot**.

| Asset | Dimensions | File |
|---|---|---|
| Screenshot 1–5 | 1280×800 | `screenshot-1.html` … `screenshot-5.html` |
| Small promo tile | 440×280 | `promo-small-440x280.html` |
| Marquee banner | 1400×560 | `promo-marquee-1400x560.html` |
| Store icon | 128×128 | `icon-128.svg` |

---

## Privacy

PagePulse Pro does not collect, store, or transmit personal data.

- Audit history is stored in `chrome.storage.local` — on your device only
- Only the URL you choose to audit is sent (to Google's public API)
- No analytics, no trackers, no account system

Full policy: [website/app/privacy/page.tsx](website/app/privacy/page.tsx)

---

## Tech Stack

**Extension**
- Manifest V3
- Vanilla JS + HTML + CSS
- Google PageSpeed Insights API (public, no key)
- Pollinations AI API (public, no key)
- jsPDF + html2canvas (PDF export)

**Website**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Plus Jakarta Sans (Google Fonts)
- Deployed as static export

---

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss any significant changes.

```bash
git clone https://github.com/sayak-biswas/PagePulse-Pro.git
cd PagePulse-Pro

# Load the extension folder unpacked in Chrome (see Installation above)
# Edit popup.js / content.js / popup.html and reload the extension
```

For website changes:
```bash
cd website && npm install && npm run dev
```

---

## License

MIT © [Sayak Biswas](https://in.linkedin.com/in/sayak-biswas)

---

<div align="center">

Built with ❤️ by [Sayak Biswas](https://in.linkedin.com/in/sayak-biswas)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/sayak-biswas)

</div>
