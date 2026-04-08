"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const screenshots = [
  { label: "Player mods panel" },
  { label: "Battle mods panel" },
  { label: "Pet mods panel" },
  { label: "Location mods panel" }
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
              className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden aspect-video flex items-center justify-center hover:border-[rgba(201,168,76,0.25)] transition-colors"
            >
              <div className="text-center">
                <p className="text-[#c9a84c]/40 text-xs uppercase tracking-[0.25em] mb-2">
                  Coming soon
                </p>
                <p className="text-[#444] text-sm">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[#666] text-xs mt-8">
          Screenshots will be added to /public/screenshots/ after launch.
        </p>
      </div>
    </section>
  );
}
