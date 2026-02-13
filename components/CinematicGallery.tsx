"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cinematicMemories } from "@/lib/memories";

export default function CinematicGallery() {

  return (
    <div>
      {cinematicMemories.map((memory, index) => (
        <section key={index} className="relative h-screen">

          <Image
            src={memory.image}
            alt="memory"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-20 left-10 text-white text-4xl md:text-6xl font-bold"
          >
            {memory.text}
          </motion.h2>

        </section>
      ))}
    </div>
  );
}
