"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { heroData } from "@/data";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      {/* <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      /> */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('${heroData.img}')`,
          transform: "translateZ(0)", // Helps prevent jitter
          willChange: "transform", // Optimizes animation
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          times: [0, 0.6, 1],
          duration: 40,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeOut",
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="relative z-10 isolate px-6 lg:px-8 backdrop-blur-[1px]">
          <div className="mx-auto max-w-2xl pt-28 sm:pt-48 lg:pt-48 pb-4 sm:pb-20 lg:pb-28">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/40 hover:ring-gray-50/20">
                {heroData.kicker}
              </div>
            </div>
            <div className="text-center">
              <TextGenerateEffect
                words={heroData.headline}
                className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-7xl"
              />
              {/* <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Lorem ipsum dolor sit amet consectetur
            </h1> */}
              <p className="mt-6 text-lg leading-8 text-white">
                {heroData.subHeader}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-neutral-50 px-8 py-4 text-black shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-50"
                >
                  {heroData.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
