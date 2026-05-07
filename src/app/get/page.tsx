import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrowserIcon } from "@/components/ui/BrowserIcon";

export const metadata: Metadata = {
  title: "Get Play Origin",
  description:
    "Play Origin is temporarily unavailable on the Chrome Web Store. Install it from Firefox Add-ons or Microsoft Edge Add-ons.",
};

function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.045.033.059a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function GetPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex items-center justify-center">
        <section className="py-32 w-full relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              ✦ Temporary Notice
            </p>

            <h1
              className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Temporarily unavailable
              <br />
              on the Chrome Web Store
            </h1>

            <p className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-12">
              Play Origin is currently unavailable from the Chrome Web Store.
              You can still install it from the{" "}
              <span className="text-white">Firefox Add-ons</span> or{" "}
              <span className="text-white">Microsoft Edge Add-ons</span> stores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href="https://microsoftedge.microsoft.com/addons/detail/prodigy-hacking-extension/ekoakjipfmjpmlkldiikhoigaflfkjej"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#c9a84c] text-black font-semibold rounded-md hover:bg-[#d4b65e] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)] active:scale-[0.98] transition-all duration-200 text-base"
              >
                <BrowserIcon browser="edge" size={20} />
                Microsoft Edge
              </a>

              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/playorigin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#c9a84c] text-black font-semibold rounded-md hover:bg-[#d4b65e] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)] active:scale-[0.98] transition-all duration-200 text-base"
              >
                <BrowserIcon browser="firefox" size={20} />
                Firefox
              </a>
            </div>

            <a
              href="https://dsc.gg/ProdigyPXP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-semibold rounded-md hover:bg-[rgba(201,168,76,0.08)] hover:shadow-[0_0_16px_rgba(201,168,76,0.2)] active:scale-[0.98] transition-all duration-200 text-base"
            >
              <DiscordIcon size={20} />
              Join Discord for updates
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
