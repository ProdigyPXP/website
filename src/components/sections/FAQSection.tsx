"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "What is Play Origin?",
    a: "Play Origin is a free, open-source browser extension that adds a full mod menu to the online math game at play.prodigygame.com. Press Shift in-game to toggle the menu and access mods for gold, XP, pets, battles, and more."
  },
  {
    q: "Is it really free?",
    a: "Yes — 100% free, forever. No premium tier, no subscription, no paywalled features. The source code is public on GitHub under the MPL-2.0 license."
  },
  {
    q: "What browsers does it support?",
    a: "Chrome, Edge, Brave, Opera, and Firefox. Install from the Chrome Web Store, Microsoft Edge Add-ons, or Firefox Add-ons."
  },
  {
    q: "How do I open the mod menu?",
    a: "After installing, open the math game and press Shift. The Play Origin panel slides in from the side. Press Shift again to close it."
  },
  {
    q: "Can I set unlimited gold?",
    a: "Yes. Navigate to Player Mods in the menu, enter any value in the currency field, and hit Apply. Changes take effect immediately, client-side only."
  },
  {
    q: "How do I unlock all pets?",
    a: "Open the Pet Mods panel and tap 'Unlock all rare/epic pets'. You can also add any individual pet by ID or uncap a pet's level limit."
  },
  {
    q: "Will my account get banned?",
    a: "Play Origin only modifies client-side data — nothing is sent to the game's servers. Your account data on the backend is not changed. Use at your own discretion."
  },
  {
    q: "Is this the same as Prodigy Origin?",
    a: "Yes. Prodigy Origin was rebranded to Play Origin in 2026 — same extension, same team, same GitHub repo (ProdigyPXP/ProdigyOrigin)."
  }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <span className="sr-only">
        Frequently asked questions about Play Origin — the Prodigy Math Game hack, mod, and cheat extension.
        Topics: how to hack Prodigy 2026, Prodigy free gold, Prodigy pet unlock, Prodigy battle mod, Prodigy scripts, ProdigyPXP.
      </span>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions."
          subtitle="Everything you need to know before you install."
        />
        <div className="mt-16 space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-[#1a1a1a] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-medium hover:bg-[#111] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                {open === i
                  ? <Minus size={18} className="text-[#c9a84c] shrink-0 ml-4" />
                  : <Plus size={18} className="text-[#c9a84c] shrink-0 ml-4" />
                }
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#a0a0a0] text-sm leading-relaxed border-t border-[#1a1a1a]">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
