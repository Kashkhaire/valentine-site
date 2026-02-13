"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 2 }}
      className="fixed inset-0 bg-black flex items-center justify-center text-white text-4xl z-50"
    >
      Our Love Story ❤️
    </motion.div>
  );
}
