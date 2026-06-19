import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getExtensionStats } from "@/lib/getExtensionStats";
import { BrowserIcon } from "@/components/ui/BrowserIcon";
import type { Browser } from "@/lib/useBrowser";

export const metadata: Metadata = {
  title: "Play Origin Stats — Prodigy Hack Extension Active Users",
  description:
    "See how many Prodigy players run Play Origin each week. Live active user counts for the free Prodigy Math Game mod extension across Chrome, Edge, and Firefox — pulled from public store listings and updated hourly.",
};

export const revalidate = 3600;

function formatNum(n: number | null, approximate?: boolean): string {
  if (n === null) return "—";
  return n.toLocaleString("en-US") + (approximate ? "+" : "");
}

const livePlatforms: {
  key: "chrome" | "edge";
  label: string;
  browser: Browser;
  storeUrl: string;
  note: string;
  approximate: boolean;
}[] = [
  {
    key: "chrome",
    label: "Chrome Web Store",
    browser: "chrome",
    storeUrl:
      "https://chromewebstore.google.com/detail/meckkcfdiildmoohhfkddapggojdhpgo",
    note: "Weekly active users",
    approximate: true,
  },
  {
    key: "edge",
    label: "Microsoft Edge Add-ons",
    browser: "edge",
    storeUrl:
      "https://microsoftedge.microsoft.com/addons/detail/prodigy-hacking-extension/ekoakjipfmjpmlkldiikhoigaflfkjej",
    note: "Total active users",
    approximate: false,
  },
];

export default async function StatsPage() {
  const stats = await getExtensionStats();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="sr-only">
              Play Origin is one of the most widely used Prodigy Math Game mod extensions available,
              with active users across Chrome, Edge, and Firefox. These figures come directly from each
              browser&apos;s public store listing and refresh every hour. Chrome reports weekly active users;
              Edge Add-ons reports total active users.
            </span>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              ✦ Live Stats
            </p>
            <p className="text-[#a0a0a0] text-sm mb-3">Total active users</p>
            <h1
              className="text-7xl sm:text-9xl font-semibold text-white mb-4 tabular-nums"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              {formatNum(stats.total, true)}
            </h1>
            <p className="text-[#555] text-sm">across all platforms</p>
          </div>
        </section>

        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {livePlatforms.map((p) => (
                <a
                  key={p.key}
                  href={p.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111] border border-[#1a1a1a] rounded-xl p-8 flex flex-col gap-5 hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_0_40px_rgba(201,168,76,0.08)] transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                    <BrowserIcon
                      browser={p.browser}
                      size={22}
                      className="text-[#c9a84c]"
                    />
                  </div>
                  <div>
                    <p className="text-[#555] text-xs mb-1">{p.label}</p>
                    <p
                      className="text-4xl font-semibold text-white tabular-nums"
                      style={{ fontFamily: "var(--font-playfair-display)" }}
                    >
                      {formatNum(stats[p.key], p.approximate)}
                    </p>
                    <p className="text-[#444] text-xs mt-1">{p.note}</p>
                  </div>
                </a>
              ))}

              {/* Firefox placeholder */}
              <a
                href="https://firefox.playorig.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-8 flex flex-col gap-5 opacity-50 hover:opacity-70 transition-opacity"
              >
                <div className="w-11 h-11 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center">
                  <BrowserIcon
                    browser="firefox"
                    size={22}
                    className="text-[#c9a84c]"
                  />
                </div>
                <div>
                  <p className="text-[#555] text-xs mb-1">Firefox Add-ons</p>
                  <p
                    className="text-4xl font-semibold text-white tabular-nums"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    —
                  </p>
                  <p className="text-[#444] text-xs mt-1">Coming soon</p>
                </div>
              </a>
            </div>

            <p className="mt-10 text-center text-xs text-[#333]">
              Updated hourly · Sourced from public store listings
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
