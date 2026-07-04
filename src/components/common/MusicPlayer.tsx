import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

interface Props {
  enabled: boolean;
}

export default function MusicPlayer({ enabled }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0;

    audio
      .play()
      .then(() => {
        setPlaying(true);

        // Smooth Fade In
        const fade = setInterval(() => {
          if (audio.volume < 0.3) {
            audio.volume = Math.min(audio.volume + 0.03, 0.3);
          } else {
            clearInterval(fade);
          }
        }, 200);
      })
      .catch((err) => {
        console.log("Autoplay blocked:", err);
      });
  }, [enabled]);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-bgm.mp3"
      />

      {enabled && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-xl"
        >
          {playing ? (
            <FaVolumeHigh
              size={24}
              className="text-pink-600"
            />
          ) : (
            <FaVolumeXmark
              size={24}
              className="text-pink-600"
            />
          )}
        </motion.button>
      )}
    </>
  );
}