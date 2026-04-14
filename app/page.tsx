import Link from "next/link";

/* ─── Gauge SVG Icon ─────────────────────────────────────────── */
function GaugeLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.69)}
      viewBox="0 0 64 44"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 36A26 26 0 0 1 58 36"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6 36A26 26 0 0 1 17 13.2"
        stroke="#ea4335"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 13.2A26 26 0 0 1 32 8"
        stroke="#fbbc04"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 8A26 26 0 0 1 58 36"
        stroke="#34a853"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="32" y1="36" x2="45" y2="16"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="36" r="4.5" fill="white" />
    </svg>
  );
}

/* ─── Extension Popup Mockup ─────────────────────────────────── */
function PopupMockup() {
  return (
    <div className="popup-shadow bg-white rounded-2xl overflow-hidden w-[340px] shrink-0 select-none">
      {/* Header */}
      <div
        className="px-4 pt-4 pb-3"
        style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <GaugeLogo size={22} />
            PagePulse Pro
          </div>
          <button className="bg-[#fbbc04] text-[#202124] text-[10px] font-bold px-3 py-1 rounded-full">
            Analyse
          </button>
        </div>
        <div className="bg-white/10 rounded-md px-3 py-1.5 text-[11px] text-white/70 truncate">
          🔗 yourwebsite.com/landing-page
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        {["⚡ Speed", "🔍 SEO", "🤖 AI Fix", "📋 History"].map((t, i) => (
          <button
            key={t}
            className={`flex-1 py-2 text-[10px] font-semibold transition-colors ${
              i === 0
                ? "text-[#1a73e8] border-b-2 border-[#1a73e8]"
                : "text-slate-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Body */}
      <div className="p-4">
        {/* Scores */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          {[
            { label: "📱 Mobile", score: "72", color: "#e37400", tag: "Needs Work", tagBg: "#fef3c7", tagColor: "#92400e" },
            { label: "🖥️ Desktop", score: "94", color: "#0d904f", tag: "Good", tagBg: "#e6f4ea", tagColor: "#0d904f" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center"
            >
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wide mb-1">
                {s.label}
              </div>
              <div
                className="text-3xl font-black leading-none mb-1.5"
                style={{ color: s.color }}
              >
                {s.score}
              </div>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: s.tagBg, color: s.tagColor }}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "LCP", value: "1.8s", color: "#0d904f", w: "82%" },
            { label: "CLS", value: "0.04", color: "#0d904f", w: "92%" },
            { label: "TBT", value: "140ms", color: "#e37400", w: "58%" },
            { label: "FCP", value: "1.2s", color: "#0d904f", w: "88%" },
            { label: "TTFB", value: "0.4s", color: "#0d904f", w: "93%" },
            { label: "Speed Index", value: "2.4s", color: "#e37400", w: "55%" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-slate-50 border border-slate-100 rounded-lg p-2"
            >
              <div className="text-[9px] text-slate-500 mb-0.5">{m.label}</div>
              <div className="text-sm font-extrabold mb-1.5" style={{ color: m.color }}>
                {m.value}
              </div>
              <div className="h-[3px] bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: m.w, background: m.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SEO Popup Mockup ───────────────────────────────────────── */
function SeoMockup() {
  const checks = [
    { label: "Title Tag", status: "pass", detail: "55 chars" },
    { label: "Meta Description", status: "pass", detail: "142 chars" },
    { label: "H1 Tag", status: "pass", detail: "1 found" },
    { label: "Image Alt Text", status: "fail", detail: "3 missing" },
    { label: "Canonical Tag", status: "pass", detail: "Present" },
    { label: "Open Graph", status: "warn", detail: "og:image missing" },
    { label: "Twitter Card", status: "fail", detail: "Not found" },
    { label: "HTTPS", status: "pass", detail: "Secure" },
  ];

  const icons: Record<string, { icon: string; bg: string; text: string }> = {
    pass: { icon: "✓", bg: "#34a853", text: "white" },
    fail: { icon: "✗", bg: "#ea4335", text: "white" },
    warn: { icon: "!", bg: "#fbbc04", text: "#202124" },
  };

  return (
    <div className="popup-shadow bg-white rounded-2xl overflow-hidden w-[300px] shrink-0 select-none">
      <div
        className="px-4 py-3"
        style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}
      >
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <GaugeLogo size={20} />
          SEO Audit
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
          style={{
            background: "conic-gradient(#34a853 0% 71%, #e8eaed 71% 100%)",
          }}
        >
          <span className="bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-emerald-700">
            71%
          </span>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">SEO Health</div>
          <div className="text-[10px] text-slate-500 mt-0.5">10 pass · 2 warn · 2 fail</div>
        </div>
      </div>
      <div className="p-3 space-y-1.5">
        {checks.map((c) => {
          const ic = icons[c.status];
          return (
            <div
              key={c.label}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border ${
                c.status === "pass"
                  ? "bg-emerald-50 border-emerald-100"
                  : c.status === "fail"
                  ? "bg-red-50 border-red-100"
                  : "bg-amber-50 border-amber-100"
              }`}
            >
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
                style={{ background: ic.bg, color: ic.text }}
              >
                {ic.icon}
              </span>
              <span
                className={`text-[10px] font-semibold flex-1 ${
                  c.status === "pass"
                    ? "text-emerald-800"
                    : c.status === "fail"
                    ? "text-red-800"
                    : "text-amber-800"
                }`}
              >
                {c.label}
              </span>
              <span className="text-[9px] text-slate-500">{c.detail}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Navigation ─────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#080e20]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-sm">
          <GaugeLogo size={26} />
          PagePulse <span className="text-[#fbbc04]">Pro</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-white/60 hover:text-white text-sm transition-colors hidden sm:block"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="text-white/60 hover:text-white text-sm transition-colors hidden sm:block"
          >
            Privacy
          </Link>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fbbc04] hover:bg-[#f0b400] text-[#202124] text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#080e20] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-2">
              <GaugeLogo size={22} />
              PagePulse <span className="text-[#fbbc04]">Pro</span>
            </div>
            <p className="text-white/40 text-xs max-w-xs">
              Free Chrome extension. Powered by Google PageSpeed Insights.
              No account required.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                Privacy Policy
              </Link>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/80 text-xs transition-colors"
              >
                Chrome Web Store
              </a>
              <a
                href="https://in.linkedin.com/in/sayak-biswas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/80 text-xs transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-white/30 text-xs">
              Built by{" "}
              <a
                href="https://in.linkedin.com/in/sayak-biswas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/80 transition-colors"
              >
                Sayak Biswas
              </a>{" "}
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-14 overflow-hidden"
        style={{ background: "#080e20" }}
      >
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            {/* Left */}
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 text-[#fbbc04] text-xs font-semibold bg-[#fbbc04]/10 border border-[#fbbc04]/20 px-3 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-[#fbbc04] rounded-full animate-pulse" />
                Free Chrome Extension
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
                Audit any page
                <br />
                <span className="text-gradient">in 3 seconds flat.</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                Real Core Web Vitals from Google, a 14-point SEO checklist, and
                AI-powered fixes — all from your Chrome toolbar. No account.
                No API key. Just click.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors shadow-lg shadow-[#1a73e8]/30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
                  </svg>
                  Add to Chrome — Free
                </a>
                <span className="text-white/35 text-xs">
                  No sign-up &middot; Works instantly
                </span>
              </div>

              <div className="flex items-center gap-5 flex-wrap">
                {[
                  { dot: "#34a853", label: "No sign-up" },
                  { dot: "#4285f4", label: "No API key" },
                  { dot: "#fbbc04", label: "100% free" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: item.dot }} />
                    <span className="text-white/40 text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — popup mockups */}
            <div className="relative flex items-start gap-3 shrink-0">
              <PopupMockup />
              <div className="mt-12 hidden xl:block">
                <SeoMockup />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #f8fafc)" }}
        />
      </section>

      {/* ── POWERED BY STRIP ─────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            Powered by
          </span>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {["#4285f4", "#ea4335", "#fbbc04", "#34a853"].map((c, i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <span className="text-slate-700 text-sm font-semibold">
              Google PageSpeed Insights API
            </span>
          </div>
          <span className="text-slate-200 hidden sm:block">|</span>
          <span className="text-slate-500 text-xs">
            The same engine Google uses for search ranking signals
          </span>
        </div>
      </section>

      {/* ── WHAT IT DOES ─────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#1a73e8] text-sm font-semibold uppercase tracking-wider mb-3">
            Everything in one click
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Four tools. Zero friction.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Most audits live in tabs you forget to check. PagePulse Pro lives
            in your toolbar — one click, instant results.
          </p>
        </div>

        <div
          id="features"
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {[
            {
              icon: "⚡",
              color: "#1a73e8",
              bg: "#eff6ff",
              title: "Real Core Web Vitals",
              body: "LCP, CLS, TBT, FCP, TTFB, Speed Index — pulled directly from Google&apos;s PageSpeed Insights API. Mobile and Desktop scores side by side.",
            },
            {
              icon: "🔍",
              color: "#0d904f",
              bg: "#f0fdf4",
              title: "14-Point SEO Audit",
              body: "Title, meta, headings, alt text, canonical, Open Graph, Twitter Card, structured data, HTTPS, word count — the full checklist in seconds.",
            },
            {
              icon: "🤖",
              color: "#7c3aed",
              bg: "#faf5ff",
              title: "AI Fix Guide",
              body: "Not just &apos;what&apos;s broken&apos; but &apos;how to fix it&apos;. Specific code suggestions for every issue, free, with no API key needed.",
            },
            {
              icon: "📥",
              color: "#c2410c",
              bg: "#fff7ed",
              title: "PDF Export + History",
              body: "Download polished reports for clients or track your own site&apos;s progress over time. Stored locally — never on our servers.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 p-7 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: f.bg }}
              >
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-slate-50 section-border py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1a73e8] text-sm font-semibold uppercase tracking-wider mb-3">
              Simple by design
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Three steps. That&apos;s it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16.7%] right-[16.7%] h-px bg-slate-200" />
            {[
              {
                n: "1",
                title: "Install the extension",
                body: "One click from the Chrome Web Store. No account, no email, no form to fill out.",
              },
              {
                n: "2",
                title: "Visit any webpage",
                body: "Navigate to the page you want to audit — your site, a competitor&apos;s, anything publicly accessible.",
              },
              {
                n: "3",
                title: "Click the icon",
                body: "Hit the PagePulse Pro icon in your toolbar. Speed scores and SEO results are ready in under 3 seconds.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-white border-2 border-[#1a73e8] rounded-2xl flex items-center justify-center text-2xl font-black text-[#1a73e8] mb-5 relative z-10 shadow-sm">
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEED DETAIL ─────────────────────────────────────── */}
      <section className="bg-white section-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-blue-50 text-[#1a73e8] text-xs font-semibold px-3 py-1 rounded-full mb-5">
                ⚡ Speed Analysis
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                The exact numbers
                <br />
                Google uses to rank you.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                PagePulse Pro pulls data from the same Google API that powers
                PageSpeed Insights and Search Console. The scores you see here
                are the scores that affect your search ranking.
              </p>
              <ul className="space-y-3">
                {[
                  ["LCP", "Largest Contentful Paint — how fast the main content loads"],
                  ["CLS", "Cumulative Layout Shift — how stable the layout is"],
                  ["TBT", "Total Blocking Time — how responsive the page feels"],
                  ["FCP / TTFB", "First paint + server response time"],
                ].map(([label, desc]) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-[#1a73e8] font-mono font-bold text-sm w-20 shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="text-slate-500 text-sm leading-snug">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="text-xs text-slate-400 font-medium mb-4 flex items-center justify-between">
                <span>yourwebsite.com — Desktop</span>
                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">94 Good</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "LCP", value: "1.8s", pct: 82, color: "#34a853" },
                  { label: "CLS", value: "0.04", pct: 93, color: "#34a853" },
                  { label: "TBT", value: "140ms", pct: 60, color: "#fbbc04" },
                  { label: "FCP", value: "1.2s", pct: 88, color: "#34a853" },
                  { label: "TTFB", value: "0.4s", pct: 94, color: "#34a853" },
                  { label: "Speed Index", value: "2.4s", pct: 55, color: "#fbbc04" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-24 shrink-0">{m.label}</span>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${m.pct}%`, background: m.color }}
                      />
                    </div>
                    <span className="text-xs font-bold w-12 text-right" style={{ color: m.color }}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO DETAIL ───────────────────────────────────────── */}
      <section className="bg-slate-50 section-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Title Tag", st: "pass", val: "55 chars" },
                  { label: "Meta Description", st: "pass", val: "142 chars" },
                  { label: "H1 Tag", st: "pass", val: "1 found" },
                  { label: "Image Alt Text", st: "fail", val: "3 missing" },
                  { label: "Canonical Tag", st: "pass", val: "Present" },
                  { label: "HTTPS", st: "pass", val: "Secure" },
                  { label: "Open Graph", st: "warn", val: "og:image missing" },
                  { label: "Twitter Card", st: "fail", val: "Not found" },
                  { label: "Structured Data", st: "warn", val: "None detected" },
                  { label: "Viewport Meta", st: "pass", val: "Present" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className={`px-3 py-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                      c.st === "pass"
                        ? "bg-emerald-50 border-emerald-100"
                        : c.st === "fail"
                        ? "bg-red-50 border-red-100"
                        : "bg-amber-50 border-amber-100"
                    }`}
                  >
                    <span className={`font-bold shrink-0 ${
                      c.st === "pass" ? "text-emerald-600" : c.st === "fail" ? "text-red-600" : "text-amber-600"
                    }`}>
                      {c.st === "pass" ? "✓" : c.st === "fail" ? "✗" : "!"}
                    </span>
                    <span className="font-medium text-slate-700 truncate">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                🔍 SEO Audit
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                14 checks.
                <br />
                Zero guesswork.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                Every on-page SEO factor that matters — checked automatically.
                Not just pass/fail, but the actual value found so you know
                exactly what to change.
              </p>
              <div className="flex gap-6">
                {[
                  { n: "10", label: "avg. pass" },
                  { n: "2", label: "avg. warn" },
                  { n: "2", label: "avg. fail" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-slate-900">{s.n}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="bg-white section-border py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Built for people who care about performance.
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Whether you ship code or write briefs, fast pages matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                role: "Web Developers",
                desc: "Run it before every deploy. Catch regressions in LCP or CLS before they go live.",
                icon: "👨‍💻",
              },
              {
                role: "SEO Professionals",
                desc: "Audit client pages in seconds and download a PDF ready to drop straight into reports.",
                icon: "📈",
              },
              {
                role: "Digital Marketers",
                desc: "Get plain-English results you can hand to a developer without needing a technical background.",
                icon: "📣",
              },
              {
                role: "Freelancers",
                desc: "Win clients by showing up with a detailed audit before they even ask. The PDF export is ready.",
                icon: "💼",
              },
              {
                role: "Content Creators",
                desc: "Make sure every post is properly structured, described, and actually indexed by Google.",
                icon: "✍️",
              },
              {
                role: "Site Owners",
                desc: "You shouldn&apos;t need an agency to know if your website is healthy. This is that check.",
                icon: "🏠",
              },
            ].map((p) => (
              <div
                key={p.role}
                className="border border-slate-100 rounded-2xl p-6 hover:shadow-sm hover:border-slate-200 transition-all"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{p.role}</h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY CALLOUT ──────────────────────────────────── */}
      <section className="bg-slate-50 section-border py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center text-2xl shrink-0">
            🔒
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 mb-1">
              Your data stays on your machine
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              PagePulse Pro stores audit history in your browser&apos;s local storage.
              It sends only the URL you choose to audit to Google&apos;s public API.
              No personal data is collected. No account. No tracking.
            </p>
          </div>
          <Link
            href="/privacy"
            className="text-[#1a73e8] text-sm font-semibold hover:underline whitespace-nowrap"
          >
            Privacy Policy →
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: "#080e20" }}
      >
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <GaugeLogo size={48} />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-6 mb-4">
            Start auditing in
            <br />
            <span className="text-gradient">30 seconds.</span>
          </h2>
          <p className="text-white/50 mb-10 text-base">
            Install from the Chrome Web Store. No credit card. No sign-up. Just click.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#fbbc04] hover:bg-[#f0b400] text-[#202124] font-bold text-base px-8 py-4 rounded-full transition-colors shadow-xl shadow-[#fbbc04]/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Add PagePulse Pro to Chrome
          </a>
          <p className="mt-4 text-white/25 text-xs">
            Compatible with Chrome, Brave, Edge, and all Chromium browsers
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
