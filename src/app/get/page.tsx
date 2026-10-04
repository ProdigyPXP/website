import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstallButton } from "@/components/ui/InstallButton";

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

            <div className="flex flex-col items-center gap-4">
              <InstallButton
                browser="chrome"
                href="https://chromewebstore.google.com/detail/meckkcfdiildmoohhfkddapggojdhpgo"
              />
              <InstallButton
                browser="edge"
                href="https://microsoftedge.microsoft.com/addons/detail/prodigy-hacking-extension/ekoakjipfmjpmlkldiikhoigaflfkjej"
              />
              <InstallButton
                browser="firefox"
                href="https://addons.mozilla.org/en-US/firefox/addon/playorigin/"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
