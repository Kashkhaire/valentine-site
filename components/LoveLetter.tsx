"use client";

import { useEffect, useState } from "react";

export default function LoveLetter() {

  const text = `Happy Valentine’s Day, My Chota Cartoon ❤️🥰

I don’t even know where to begin because words often feel too small to express how much you mean to me. From the moment you came into my life, everything started feeling brighter, calmer, and more meaningful. You didn’t just become someone special to me… you became my comfort, my happiness, and my favorite part of every single day.

Being with you has taught me what real love feels like. It’s not just about the happy moments, the laughter, or the beautiful memories we create together. It’s about the way you understand me without me saying anything, the way you stand beside me during difficult times, and the way your presence alone makes everything feel okay. With you, I have found not just love, but peace and home.

I want you to know that I admire everything about you — your kindness, your strength, your smile, your heart, and even the little things that make you who you are. You inspire me to become a better person every day, and I feel incredibly lucky to walk through life with you by my side.

I promise to always respect you, support your dreams, stand with you in your struggles, and celebrate every happiness that comes your way. I promise to hold your hand through every chapter of life, no matter what challenges come ahead. I promise to love you in your best moments and love you even more in your toughest ones.

You are not just my partner, you are my best friend, my safe place, my biggest blessing, and my forever person. Every memory we create together becomes a treasure in my heart, and I cannot wait to create a lifetime of memories with you.

Thank you for loving me, trusting me, and being the beautiful soul that you are. You have changed my life in ways I never thought were possible, and I am grateful for you every single day.

Happy Valentine’s Day once again, my Chota Cartoon🥰. No matter where life takes us, my heart will always belong to you, and I will always choose you… today, tomorrow, and forever. ❤️`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) clearInterval(interval);
    }, 25); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-20 py-20 text-white text-center">

      <h2 className="text-4xl font-bold mb-10">
        Love Letter 💌
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-8 whitespace-pre-line">
        {displayText}
      </p>

    </section>
  );
}
