"use client";
import { useEffect } from "react";

export default function Hearts() {

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.className = "fixed bottom-0 text-2xl";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animation = "float 6s linear";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 6000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
