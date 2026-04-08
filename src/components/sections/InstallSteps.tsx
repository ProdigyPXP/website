"use client";

import { motion } from "framer-motion";
import { Download, Package, MousePointer, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    icon: Download,
    title: "Download",
    desc: "Grab the latest release ZIP from GitHub Releases."
  },
  {
    icon: Package,
    title: "Unzip",
    desc: "Extract the ZIP to any folder — Chrome loads unpacked extensions from disk."
  },
  {
    icon: MousePointer,
    title: "Load unpacked",
    desc: "Open chrome://extensions, enable Developer Mode, click Load unpacked, select the folder."
  },
  {
    icon: PlayCircle,
    title: "Play",
    desc: "Visit play.prodigygame.com and hit Shift to open the mod menu."
  }
];

export function InstallSteps() {
  return (
    <section id="install" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Install in four steps."
          subtitle="Works in Chrome, Edge, Brave, Opera, and Firefox."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative bg-[#111] border border-[#1a1a1a] rounded-xl p-6"
            >
              <span
                className="absolute top-4 right-5 text-[#c9a84c]/25 text-4xl font-bold leading-none"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {i + 1}
              </span>
              <s.icon size={24} className="text-[#c9a84c] mb-4" />
              <h3 className="text-base font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-[#a0a0a0] text-xs leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <Button
            variant="primary"
            size="lg"
            href="https://github.com/ProdigyPXP/ProdigyOrigin/releases/latest"
            external
          >
            <Download size={18} />
            Download Latest Release
          </Button>
        </div>
      </div>
    </section>
  );
}
