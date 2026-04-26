import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prodigy Origin — Mod loader for Prodigy Math Game",
  description:
    "Free, open-source browser extension that injects a full mod menu into Prodigy Math Game. Edit gold, XP, pets, battles — all client-side.",
  metadataBase: new URL("https://prodigyorigin.com"),
  openGraph: {
    title: "Prodigy Origin",
    description:
      "Free and open-source mod loader for Prodigy Math Game.",
    images: ["/logo.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://prodigyorigin.com/#app",
      name: "Prodigy Origin",
      url: "https://prodigyorigin.com",
      downloadUrl: "https://extension.prodigyorigin.com",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Edge, Brave, Opera, Firefox",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      softwareVersion: "4.1.0",
      license: "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/LICENSE.txt",
      description:
        "Free, open-source browser extension that injects a full mod menu into Prodigy Math Game. Edit gold, XP, pets, battles, and more — all client-side.",
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
          name: "What is Prodigy Origin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prodigy Origin is a free, open-source browser extension that adds a mod menu to Prodigy Math Game. It lets players edit gold, XP, pets, battle mechanics, and movement — all client-side, with no server modifications."
          }
        },
        {
          "@type": "Question",
          name: "Is Prodigy Origin free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Prodigy Origin is completely free and open-source under the MPL-2.0 license. There are no paid tiers or premium features."
          }
        },
        {
          "@type": "Question",
          name: "What browsers does Prodigy Origin support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prodigy Origin works in Chrome, Edge, Brave, Opera, and Firefox. It is distributed via the Chrome Web Store and is compatible with any Chromium-based browser."
          }
        },
        {
          "@type": "Question",
          name: "How do I install Prodigy Origin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit the Prodigy Origin listing on the Chrome Web Store at extension.prodigyorigin.com, click 'Add to Chrome', confirm the install prompt, then pin the extension from the puzzle-piece menu. Once installed, open Prodigy Math Game and press Shift to toggle the mod menu."
          }
        },
        {
          "@type": "Question",
          name: "How do I open the Prodigy Origin mod menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After installing the extension and loading Prodigy Math Game at play.prodigygame.com, press the Shift key to open and close the Prodigy Origin mod menu."
          }
        },
        {
          "@type": "Question",
          name: "What mods does Prodigy Origin include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prodigy Origin includes mods across six main categories: Player Mods (gold, XP, level, member stars, name), Battle Mods (instant kill, set hearts, fill energy), Location Mods (WASD movement, click teleport, map teleport), Pet Mods (unlock all epics, add any pet, uncap level), Utility (save/load character, eval console, pause), and Beta Features (edit pets, invisibility, morph player)."
          }
        },
        {
          "@type": "Question",
          name: "Is Prodigy Origin safe to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prodigy Origin is open-source and its full source code is publicly auditable on GitHub. All modifications are client-side only — the extension does not interact with Prodigy's servers or modify any account data on their end."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://prodigyorigin.com/#install-howto",
      name: "How to install Prodigy Origin",
      description: "Install the Prodigy Origin mod loader browser extension in four steps.",
      totalTime: "PT2M",
      tool: [{ "@type": "HowToTool", name: "Chrome, Edge, Brave, Opera, or Firefox browser" }],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Visit the store",
          text: "Open the Prodigy Origin listing on the Chrome Web Store at extension.prodigyorigin.com."
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Add to Chrome",
          text: "Click 'Add to Chrome' and confirm the install prompt."
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pin the extension",
          text: "Pin Prodigy Origin to your toolbar by clicking the puzzle-piece menu and pinning the extension."
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Open the mod menu",
          text: "Visit play.prodigygame.com and press Shift to open the Prodigy Origin mod menu."
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
