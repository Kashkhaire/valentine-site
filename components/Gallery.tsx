"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/memories";

export default function Gallery() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">

      {galleryImages.map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative h-64 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src={img}
            alt="memory"
            fill
            className="object-cover"
          />
        </motion.div>
      ))}

    </div>
  );
}
