// Custom React hooks

import { useState, useEffect } from "react";

// Hook for managing video loading states
export const useVideoLoader = (totalVideos: number) => {
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos) {
      setIsLoading(false);
    }
  }, [loadedVideos, totalVideos]);

  return { loadedVideos, isLoading, handleVideoLoad };
};

// Hook for managing audio state
export const useAudio = (audioSrc: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio(audioSrc));

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return { isPlaying, toggleAudio };
};

// Hook for scroll-based navbar visibility
export const useScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { isVisible };
};
