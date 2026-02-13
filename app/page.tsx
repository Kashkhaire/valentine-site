"use client";

import Intro from "@/components/Intro";
import MusicPlayer from "@/components/MusicPlayer";
import Hearts from "@/components/Hearts";
import CinematicGallery from "@/components/CinematicGallery";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import Proposal from "@/components/Proposal";

export default function Home() {

  return (
    <main className="bg-gradient-to-b from-pink-200 to-black min-h-screen">

      <Intro />
      <MusicPlayer />
      <Hearts />

      <section className="h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold">
          Happy Valentine's Day Chota Cartoon❤️🥰
        </h1>
      </section>

      <CinematicGallery />

      {/* <Gallery /> */}

      <LoveLetter />

      {/* <Proposal /> */}

    </main>
  );
}
