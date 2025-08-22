"use client";

import { type ReactNode, type FC } from "react";

import { usePlayerBarHook } from "@/hooks/PlayerBarHook";
import { PauseIcon, PlayIcon } from "@/icons/player.icon";
import { ImSpinner2 } from "react-icons/im";

export const PlayerBar: FC = () => {
  const { radioPlayerRef, isLoading, isPlaying, handlePlay } =
    usePlayerBarHook();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="relative">
        {/*<img
          src="https://i.discogs.com/0aMPLdA6B59Icwx2yk_yAmmC_0yAGmxmYqIdbEJFPaw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzIw/MjQtMTU1MjE3NjUx/Ny03NTU5LmpwZWc.jpeg"
          width="600"
          height="600"
          className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
        />*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-lg z-50">
          <audio
            className="hidden"
            ref={radioPlayerRef}
            preload="none"
            autoPlay
            playsInline
          />
          <button
            onClick={handlePlay}
            disabled={isLoading}
            className="cursor-pointer mb-4"
          >
            {isLoading ? (
              <ImSpinner2 className="w-16 h-16 animate-spin text-white" />
            ) : !isPlaying ? (
              <PlayIcon className="w-16 h-16 text-white" />
            ) : (
              <PauseIcon className="w-16 h-16 text-white" />
            )}
          </button>
          <header className="flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-lg truncate">
              Red Hot Chili Peppers
            </h2>
            <p className="text-gray-200 truncate">Strip My Mind</p>
          </header>
        </div>
      </div>
    </div>
  );
};
