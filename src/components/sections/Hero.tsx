"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Gold radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)"
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-6"
        >
          ✦ v4.1.0 · Open Source
        </motion.p>

        <h1
          className="text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-white mb-6"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          <AnimatedText>The mod loader for Prodigy Math Game.</AnimatedText>
        </h1>

        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#a0a0a0] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A free, open-source browser extension that injects a full mod menu
          into Prodigy. Edit gold, XP, pets, battles, and more — all
          client-side, no account changes.
        </motion.p>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg" href="#install">
            Install Extension
            <ArrowRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/ProdigyPXP/ProdigyOrigin"
            external
          >
            <Code2 size={18} />
            View on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
