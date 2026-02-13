"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Proposal() {

  const [show, setShow] = useState(false);

  return (
    <section className="text-center px-6 py-20 text-white">

      <h2 className="text-4xl font-bold">
        Will You Stay With Me Forever?
      </h2>

      {!show && (
        <button
          onClick={() => setShow(true)}
          className="mt-8 px-8 py-3 bg-pink-500 rounded-full text-lg hover:scale-110 transition"
        >
          YES ❤️
        </button>
      )}

      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="text-7xl animate-bounce">💍</div>

          <p className="mt-6 text-2xl font-semibold">
            You just made me the happiest person alive ❤️
          </p>
        </motion.div>
      )}

    </section>
  );
}
