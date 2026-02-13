"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {

    const startMusic = () => {
      if (!started) {
        audioRef.current?.play().catch(() => {});
        setStarted(true);
      }
    };

    window.addEventListener("click", startMusic);

    return () => window.removeEventListener("click", startMusic);

  }, [started]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() =>
          audioRef.current?.paused
            ? audioRef.current.play()
            : audioRef.current?.pause()
        }
        className="fixed top-5 right-5 bg-pink-500 text-white px-4 py-2 rounded-full z-50"
      >
        🎵
      </button>

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}
