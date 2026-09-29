import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrowserIcon } from "@/components/ui/BrowserIcon";

export const metadata: Metadata = {
  title: "Install Play Origin — Free Prodigy Math Game Mod Extension",
  description:
    "Download the free Prodigy Math Game mod extension for Chrome, Edge, and Firefox. Play Origin — formerly Prodigy Origin — lets you set gold, unlock pets, and edit battles. Install in under a minute.",
};

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
            <span className="sr-only">
              Play Origin is the free Prodigy Math Game mod extension, available on the Chrome Web Store,
              Microsoft Edge Add-ons, and Firefox Add-ons. Previously published as Prodigy Origin by the
              ProdigyPXP team — same extension, same mods, new name.
            </span>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              ✦ Free &amp; Open Source
            </p>

            <h1
              className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Get Play Origin
            </h1>

            <p className="text-[#a0a0a0] text-base sm:text-lg leading-relaxed mb-12">
              Available for{" "}
              <span className="text-white">Chrome</span>,{" "}
              <span className="text-white">Microsoft Edge</span>, and{" "}
              <span className="text-white">Firefox</span>.
              Pick your browser below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/meckkcfdiildmoohhfkddapggojdhpgo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#c9a84c] text-black font-semibold rounded-md hover:bg-[#d4b65e] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)] active:scale-[0.98] transition-all duration-200 text-base"
              >
                <BrowserIcon browser="chrome" size={20} />
                Chrome
              </a>

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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
