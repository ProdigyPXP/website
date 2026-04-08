"use client";

import { motion } from "framer-motion";
import {
  Swords,
  Coins,
  MapPin,
  PawPrint,
  Wrench,
  Sparkles
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Coins,
    title: "Player Mods",
    desc: "Set gold, level, member stars, wins/losses, name, UserID, grade, and more."
  },
  {
    icon: Swords,
    title: "Battle Mods",
    desc: "Instant kill PvE, set battle hearts, fill energy, PvP health overrides."
  },
  {
    icon: MapPin,
    title: "Location Mods",
    desc: "WASD movement, click teleport, teleport to maps or to any player's house."
  },
  {
    icon: PawPrint,
    title: "Pet Mods",
    desc: "Unlock all epics, mythical epics, clear pets, uncap pet level, add any pet."
  },
  {
    icon: Wrench,
    title: "Utility",
    desc: "Save/load character locally, update menu, eval console, pause the game."
  },
  {
    icon: Sparkles,
    title: "Beta Features",
    desc: "Edit pets, morph player, toggle invisibility, hypermax, switch branches."
  }
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Every mod you need, organized by category."
          subtitle="Nine categories spanning every corner of the game. Toggle mods with a single click from the in-game menu."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -4 }}
              className="bg-[#111] border border-[#1a1a1a] rounded-xl p-8 transition-all hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[rgba(201,168,76,0.1)] flex items-center justify-center mb-5">
                <f.icon size={22} className="text-[#c9a84c]" />
              </div>
              <h3
                className="text-xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {f.title}
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
