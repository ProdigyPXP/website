import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VERSION } from "@/lib/VERSION";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play Origin — Prodigy Math Hack & Mod Extension | Free + Open Source",
  description:
    "Play Origin is the free, open-source Prodigy Math Game hack and mod extension. Edit gold, XP, pets, and battles client-side. Works on Chrome, Edge, Brave, and Firefox.",
  keywords: [
    "prodigy hack",
    "prodigy hack 2026",
    "how to hack prodigy",
    "prodigy mod",
    "prodigy origin",
    "prodigy math game hack",
    "prodigy math hack",
    "prodigy game hack",
    "prodigy hack extension",
    "prodigy chrome extension",
    "prodigy hack chrome",
    "prodigy free gold",
    "prodigy scripts",
    "prodigy cheat",
    "prodigy pet hack",
    "prodigypxp",
    "prodigypnp",
    "prodigy pnp",
    "prodigyx",
    "prodigy x loader",
    "pxi fusion",
    "play origin",
    "prodigy mod menu",
    "browser extension mod loader",
    "prodigy math game mod"
  ],
  metadataBase: new URL("https://prodigyorigin.com"),
  openGraph: {
    title: "Play Origin — Prodigy Math Hack & Mod Extension",
    description:
      "Free, open-source Prodigy Math Game mod with gold hacks, pet unlocks, battle mods, and more.",
    images: ["/logo.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://prodigyorigin.com/#app",
      name: "Play Origin",
      alternateName: ["Play Origin | Math game Mod Hack", "Prodigy Origin"],
      url: "https://prodigyorigin.com",
      downloadUrl: "https://extension.prodigyorigin.com",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Edge, Brave, Opera, Firefox",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      softwareVersion: VERSION,
      license: "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/LICENSE.txt",
      description:
        "Free, open-source browser extension that injects a full mod menu into your favorite online math game. Edit currency, XP, pets, battles, and more — all client-side.",
      author: {
        "@type": "Organization",
        name: "ProdigyPXP",
        url: "https://github.com/ProdigyPXP"
      },
      codeRepository: "https://github.com/ProdigyPXP/ProdigyOrigin"
    },
    {
      "@type": "FAQPage",
      "@id": "https://prodigyorigin.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Play Origin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Play Origin (formerly Prodigy Origin) is a free, open-source browser extension that adds a mod menu to online math games. It lets players edit in-game currency, XP, pets, battle mechanics, and movement — all client-side, with no server modifications."
          }
        },
        {
          "@type": "Question",
          name: "Is Play Origin free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Play Origin is completely free and open-source under the MPL-2.0 license. There are no paid tiers or premium features."
          }
        },
        {
          "@type": "Question",
          name: "What browsers does Play Origin support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Play Origin works in Chrome, Edge, Brave, Opera, and Firefox. It is compatible with any Chromium-based browser as well as Firefox."
          }
        },
        {
          "@type": "Question",
          name: "How do I install Play Origin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit extension.prodigyorigin.com, install the extension for your browser (Firefox or Microsoft Edge are currently supported store listings), then pin the extension from the puzzle-piece menu. Once installed, open the math game and press Shift to toggle the Play Origin mod menu."
          }
        },
        {
          "@type": "Question",
          name: "How do I open the Play Origin mod menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After installing the extension and loading your math game, press the Shift key to open and close the Play Origin mod menu."
          }
        },
        {
          "@type": "Question",
          name: "What mods does Play Origin include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Play Origin includes mods across six main categories: Player Mods (currency, XP, level, premium tier, name), Battle Mods (instant kill, set hearts, fill energy), Location Mods (WASD movement, click teleport, map teleport), Pet Mods (unlock all rare/epic pets, add any pet, uncap level), Utility (save/load character, eval console, pause), and Beta Features (edit pets, invisibility, morph player)."
          }
        },
        {
          "@type": "Question",
          name: "Is Play Origin safe to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Play Origin is open-source and its full source code is publicly auditable on GitHub. All modifications are client-side only — the extension does not interact with the game's servers or modify any account data on their end."
          }
        },
        {
          "@type": "Question",
          name: "Is Play Origin a Prodigy Math Game hack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Play Origin is a Prodigy Math Game hack and mod extension — also called a Prodigy cheat or Prodigy mod. It runs as a browser extension in Chrome, Edge, Brave, Firefox, and Opera, adding a full in-game cheat menu accessible by pressing Shift."
          }
        },
        {
          "@type": "Question",
          name: "How do I get free gold in Prodigy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Install Play Origin, open Prodigy Math Game at play.prodigygame.com, and press Shift to open the mod menu. Go to Player Mods and type any value in the gold/coins field, then press Apply. The change takes effect immediately, client-side only."
          }
        },
        {
          "@type": "Question",
          name: "What is Prodigy Origin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prodigy Origin is the former name of the Play Origin extension. The project was rebranded from Prodigy Origin to Play Origin in 2026 while retaining the same codebase, team, and GitHub repository at github.com/ProdigyPXP/ProdigyOrigin. You may also see it referenced as ProdigyPXP, ProdigyX, Prodigy X loader, Prodigy PNP, ProdigyPNP, or PXI Fusion on community forums."
          }
        },
        {
          "@type": "Question",
          name: "Does Play Origin work on Chrome?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Play Origin is available as a Prodigy hack Chrome extension on the Chrome Web Store. It works in Chrome, Brave, Opera, and any Chromium-based browser. The Chrome Web Store listing is at chromewebstore.google.com/detail/meckkcfdiildmoohhfkddapggojdhpgo."
          }
        },
        {
          "@type": "Question",
          name: "How do I hack Prodigy Math Game in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To hack Prodigy Math Game in 2026: (1) Install the Play Origin extension from the Chrome Web Store, Firefox Add-ons, or Microsoft Edge Add-ons. (2) Open Prodigy Math Game at play.prodigygame.com. (3) Press Shift to open the Play Origin mod menu. (4) Use Player Mods to set gold, XP, and level; Pet Mods to unlock rare and epic pets; Battle Mods for instant kills; or Location Mods to teleport. No jailbreak or account login required — runs entirely client-side in your browser."
          }
        },
        {
          "@type": "Question",
          name: "What is ProdigyPXP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ProdigyPXP is the developer community and GitHub organization behind Play Origin. The source code is maintained at github.com/ProdigyPXP/ProdigyOrigin and the community Discord is at dsc.gg/ProdigyPXP. ProdigyPXP also publishes tutorials and updates on YouTube at youtube.com/@ProdigyPXP."
          }
        },
        {
          "@type": "Question",
          name: "Are there Prodigy scripts or cheats that still work in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Play Origin is the most actively maintained Prodigy cheat and script tool for 2026. Unlike outdated Prodigy console scripts that break with each game update, Play Origin is a proper browser extension that persists across page reloads and is updated by the ProdigyPXP team to match each Prodigy Math Game patch. It is free, open-source, and available on Chrome, Firefox, and Edge."
          }
        },
        {
          "@type": "Question",
          name: "How do I unlock all pets in Prodigy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open the Play Origin mod menu by pressing Shift inside Prodigy Math Game, then navigate to Pet Mods. Click 'Unlock all rare/epic pets' to add every rare and epic pet to your collection instantly. You can also add any individual pet by ID, clear your current pets, or uncap a pet's level limit."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://prodigyorigin.com/#install-howto",
      name: "How to install Play Origin",
      description: "Install the Play Origin mod loader browser extension in four steps.",
      totalTime: "PT2M",
      tool: [{ "@type": "HowToTool", name: "Chrome, Edge, Brave, Opera, or Firefox browser" }],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Visit the store",
          text: "Open the Play Origin listing for your browser at extension.prodigyorigin.com."
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Add to your browser",
          text: "Click 'Add to Firefox' or 'Add to Edge' and confirm the install prompt."
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pin the extension",
          text: "Pin Play Origin to your toolbar by clicking the puzzle-piece menu and pinning the extension."
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Open the mod menu",
          text: "Visit the math game in your browser and press Shift to open the Play Origin mod menu."
        }
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
