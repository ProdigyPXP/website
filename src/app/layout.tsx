import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VERSION } from "@/lib/VERSION";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play Origin | Math game Mod Hack — free open-source mod loader",
  description:
    "Free, open-source browser extension that injects a full mod menu into your favorite online math game. Edit currency, XP, pets, battles — all client-side.",
  keywords: [
    "play origin",
    "play origin mod hack",
    "math game mod",
    "math game cheat",
    "math game mod menu",
    "online math game mod",
    "browser extension mod loader",
    "prodigy origin",
    "prodigy mod",
    "prodigy math game mod",
    "prodigy mod menu",
    "prodigy cheat",
    "prodigypxp"
  ],
  metadataBase: new URL("https://prodigyorigin.com"),
  openGraph: {
    title: "Play Origin | Math game Mod Hack",
    description:
      "Free and open-source mod loader for online math games.",
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
