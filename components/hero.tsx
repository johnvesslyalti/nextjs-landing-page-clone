"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-28 px-6 overflow-hidden bg-black text-white">
      {/* 🔹 Background Gradient Lines */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 🔸 Main Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-6xl font-bold mb-6"
        >
          The React Framework for the Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto text-lg text-white/50 mb-10 max-w-2xl"
        >
          Used by some of the world&apos;s largest companies, Next.js enables
          you to create{" "}
          <span className="text-white font-semibold">
            high-quality web applications
          </span>{" "}
          with the power of React components.
        </motion.p>

        <div className="flex gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-white text-black hover:bg-gray-200">
              Get Started
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-transparent border border-white text-white hover:bg-white/10">
              Learn Next.js
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
