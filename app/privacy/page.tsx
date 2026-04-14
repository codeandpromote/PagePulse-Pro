import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PagePulse Pro",
  description:
    "PagePulse Pro does not collect personal data. Read our full privacy policy for details on what data is used and how.",
};

function GaugeLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.69)} viewBox="0 0 64 44" fill="none" aria-hidden>
      <path d="M6 36A26 26 0 0 1 58 36" stroke="rgba(255,255,255,0.25)" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M6 36A26 26 0 0 1 17 13.2" stroke="#ea4335" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M17 13.2A26 26 0 0 1 32 8" stroke="#fbbc04" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M32 8A26 26 0 0 1 58 36" stroke="#34a853" strokeWidth="7" strokeLinecap="round" fill="none" />
      <line x1="32" y1="36" x2="45" y2="16" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="32" cy="36" r="4.5" fill="white" />
    </svg>
  );
}

const LAST_UPDATED = "April 14, 2026";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#080e20]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-sm">
            <GaugeLogo size={22} />
            PagePulse <span className="text-[#fbbc04]">Pro</span>
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 py-12 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4">
              <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-600">Privacy Policy</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">
              Last updated: <span className="font-semibold text-slate-700">{LAST_UPDATED}</span>
            </p>
          </div>
        </div>

        {/* Summary cards */}
        <div className="border-b border-slate-100 bg-white py-10 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-5">
              The short version
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🙅",
                  title: "No data collected",
                  body: "We don't collect, store, or sell any personal information about you.",
                },
                {
                  icon: "🖥️",
                  title: "Everything stays local",
                  body: "Your audit history is stored only in your own browser. Never on our servers.",
                },
                {
                  icon: "🔓",
                  title: "No account needed",
                  body: "There is no account, no login, no email — nothing to identify you.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-5"
                >
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">{c.title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{c.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full policy */}
        <div className="py-14 px-6">
          <div className="max-w-2xl mx-auto prose-clean">

            <h2>1. Who We Are</h2>
            <p>
              PagePulse Pro is a free Chrome browser extension developed and
              maintained by <strong>Sayak Biswas</strong>, an independent
              developer. This Privacy Policy explains what information is accessed
              when you use the extension, how it is used, and what is not done
              with it.
            </p>
            <p>
              If you have any questions about this policy, you can reach the
              developer via{" "}
              <a href="https://in.linkedin.com/in/sayak-biswas" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>.
            </p>

            <h2>2. What Data PagePulse Pro Accesses</h2>

            <h3>2a. The URL of the active tab</h3>
            <p>
              When you click the PagePulse Pro icon and choose to run an audit,
              the extension reads the URL of the current tab. This URL is sent
              to Google&apos;s public PageSpeed Insights API solely for the purpose
              of fetching performance metrics. The URL is not stored on any
              server controlled by PagePulse Pro, and is not retained beyond the
              duration of the API request.
            </p>

            <h3>2b. The page&apos;s DOM (for SEO analysis)</h3>
            <p>
              To perform the 14-point SEO audit, the extension runs a content
              script that reads the HTML structure of the active page — things
              like the title tag, meta description, heading hierarchy, image
              attributes, and link elements. This analysis happens entirely
              within your browser. No page content is transmitted to any
              external server by PagePulse Pro.
            </p>

            <h3>2c. Audit history (local storage only)</h3>
            <p>
              To provide the History tab feature, PagePulse Pro stores a
              record of past audits using Chrome&apos;s built-in{" "}
              <code>chrome.storage.local</code> API. This data is stored
              exclusively on your own device and never leaves it. It is not
              synced to any cloud service, and is not accessible to the
              developer or any third party.
            </p>
            <p>
              You can clear this history at any time from within the extension.
              Uninstalling the extension also removes all locally stored data.
            </p>

            <h2>3. What We Do Not Collect</h2>
            <ul>
              <li>Personal information (name, email, address, phone number)</li>
              <li>Browsing history beyond the single URL you actively audit</li>
              <li>Device identifiers or hardware fingerprints</li>
              <li>IP addresses or geolocation data</li>
              <li>Crash reports, usage analytics, or telemetry of any kind</li>
              <li>Cookies or tracking pixels</li>
            </ul>
            <p>
              PagePulse Pro contains no analytics SDK, no advertising framework,
              and no third-party tracking of any kind — beyond the Google
              PageSpeed Insights API call described above.
            </p>

            <h2>4. Third-Party Services</h2>

            <h3>Google PageSpeed Insights API</h3>
            <p>
              When you trigger a speed analysis, the URL of the current page is
              sent to Google&apos;s publicly available PageSpeed Insights API. This
              API call is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google&apos;s Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://developers.google.com/terms" target="_blank" rel="noopener noreferrer">
                Google APIs Terms of Service
              </a>.
              PagePulse Pro has no control over how Google processes data on
              its own infrastructure.
            </p>

            <h3>AI Fix Guide</h3>
            <p>
              The AI-powered fix suggestions feature uses a publicly accessible
              AI endpoint to generate recommendations. The data sent consists
              only of the audit findings (metric values, SEO check results) —
              not any personal information and not the full content of the page
              being audited.
            </p>

            <h2>5. Permissions Used</h2>
            <p>
              The extension requests the following Chrome permissions, and only these:
            </p>
            <ul>
              <li>
                <strong>activeTab</strong> — to read the URL and DOM of the tab
                you are actively auditing, on demand (only when you click the
                extension icon).
              </li>
              <li>
                <strong>storage</strong> — to save your audit history locally
                in your own browser via <code>chrome.storage.local</code>.
              </li>
              <li>
                <strong>scripting</strong> — to inject the content script that
                reads SEO-relevant elements from the page&apos;s HTML.
              </li>
            </ul>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              PagePulse Pro is a developer tool intended for general audiences.
              It does not knowingly collect or solicit information from anyone
              under the age of 13. If you believe a child has provided
              information to this extension in violation of this policy, please
              contact the developer immediately.
            </p>

            <h2>7. Security</h2>
            <p>
              Because PagePulse Pro does not operate any servers or databases
              that store your personal information, there is no centralised data
              store that could be breached. All audit data lives locally in your
              browser under Chrome&apos;s standard storage isolation model.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated from time to time as the
              extension evolves. Any material changes will be reflected in the
              &quot;Last updated&quot; date at the top of this page. Continued use of the
              extension after changes constitutes acceptance of the updated policy.
            </p>

            <h2>9. Your Rights</h2>
            <p>
              Since PagePulse Pro does not collect personal data, there is
              nothing to request access to, correct, or delete on our end. If
              you would like to remove the audit history stored locally on your
              device, you can do so from within the extension&apos;s History tab, or
              by uninstalling the extension entirely.
            </p>

            <h2>10. Contact</h2>
            <p>
              If you have any questions, concerns, or feedback about this
              Privacy Policy or the extension&apos;s data practices, please reach out via:
            </p>
            <ul>
              <li>
                LinkedIn:{" "}
                <a href="https://in.linkedin.com/in/sayak-biswas" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sayak-biswas
                </a>
              </li>
            </ul>
            <p>
              This policy is effective as of <strong>{LAST_UPDATED}</strong>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#080e20] border-t border-white/5 py-10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-sm">
            <GaugeLogo size={20} />
            PagePulse <span className="text-[#fbbc04]">Pro</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-white/60 text-xs">
              Privacy Policy
            </Link>
          </div>
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Sayak Biswas
          </p>
        </div>
      </footer>
    </>
  );
}
