"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Navbar() {
  const navbar_content = [
    "Showcase",
    "Docs",
    "Blog",
    "Templates",
    "Enterprise",
  ];

  return (
    <nav className="w-full border-b bg-background backdrop-blur supports-backdrop-filter:bg-background/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Image
              alt="Vercel icon"
              src="/vercel.png"
              width={24}
              height={24}
              className="mr-1"
            />
            <span className="tracking-tight">
              NEXT<span className="text-[10px]">.JS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-xs text-muted-foreground">
            {navbar_content.map((navbar_con, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="hover:text-foreground transition-colors"
              >
                {navbar_con}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <input
            placeholder="Search documentation"
            className="hidden md:block rounded-md border border-input bg-transparent px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="hidden md:block rounded-md bg-black text-white px-3 py-1.5 text-sm hover:opacity-90 transition">
            Deploy
          </button>
          <Button className="bg-white">Learn</Button>
        </div>
      </div>
    </nav>
  );
}
