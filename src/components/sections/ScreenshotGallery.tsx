"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const screenshots = [
  { label: "Player mods panel", src: "/screenshots/player-mods.jpg" },
  { label: "Battle mods panel", src: "/screenshots/battle-mods.jpg" },
  { label: "Pet mods panel", src: "/screenshots/pet-mods.jpg" },
  { label: "Location mods panel", src: "/screenshots/location-mods.png" }
];

export function ScreenshotGallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="See it in action."
          subtitle="The Origin GUI menu sits on top of the game canvas, toggleable with the Shift key."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {screenshots.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden aspect-video hover:border-[rgba(201,168,76,0.25)] transition-colors relative"
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
