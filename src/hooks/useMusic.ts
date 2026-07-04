import { useEffect, useRef, useState } from "react";

export default function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/birthday-bgm.mp3");

    audio.loop = true;
    audio.volume = 0.3;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (!enabled || !audioRef.current) return;

    const audio = audioRef.current;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [enabled]);

  const playMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.play();
    setPlaying(true);
    setEnabled(true);
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  };

  return {
    enabled,
    playing,
    setEnabled,
    playMusic,
    pauseMusic,
    toggleMusic,
  };
}