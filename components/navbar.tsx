"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const navbar_content = ["Showcase", "Docs", "Blog", "Templates", "Enterprise"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0, 0, 0, 0.3)] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Image
              alt="vercel.icon"
              src="/vercel.png"
              width={24}
              height={24}
              className="mr-1"
            />
            <span className="tracking-tight text-white">
              NEXT<span className="text-[10px]">.JS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-xs text-gray-300">
            {navbar_content.map((navbar_con, index) => (
              <motion.a
                key={index}
                href="johnvesslyalti.xyz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="hover:text-white transition-colors"
              >
                {navbar_con}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input placeholder="Search documentation" className="hidden md:block rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/30" />
          <button className="hidden md:block rounded-md bg-black text-white px-3 py-1.5 text-sm hover:opacity-80 transition">
            Deploy
          </button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Learn
          </Button>
        </div>
      </div>
    </nav>
  );
}
