"use client";

import { useEffect, useRef, useState } from "react";

export const usePlayerBarHook = () => {
  const radioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (radioPlayerRef?.current) {
      radioPlayerRef.current.volume = volume / 100;
      const audio = radioPlayerRef.current;

      const handleCanPlay = () => setIsLoading(false);
      const handlePlaying = () => setIsLoading(false);
      const handleWaiting = () => setIsLoading(true);

      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("playing", handlePlaying);
      audio.addEventListener("waiting", handleWaiting);

      return () => {
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("playing", handlePlaying);
        audio.removeEventListener("waiting", handleWaiting);
      };
    }
  }, [radioPlayerRef]);

  useEffect(() => {
    const radioPlayerCurrent = radioPlayerRef?.current;
    if (!radioPlayerCurrent) return;
    handlePlay();
  }, []);

  const handlePlay = () => {
    if (radioPlayerRef?.current) {
      if (isPlaying) {
        radioPlayerRef.current.removeAttribute("src");
        radioPlayerRef.current.pause();
        setIsPlaying(false);
      } else {
        radioPlayerRef.current.src = "https://radio.hellnet.eu/rock";
        radioPlayerRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    }
  };

  return {
    radioPlayerRef,
    handlePlay,
    isPlaying,
    volume,
    isLoading,
  };
};
