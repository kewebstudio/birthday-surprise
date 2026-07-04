import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gift from "../../assets/gift-closed.png";
import clara1 from "../../assets/clara1.png";

interface Props {
  finishLoading: () => void;
}

const loadingTexts = [
  "Wrapping your surprise... 🎁",
  "Collecting beautiful memories... 🌸",
  "Adding lots of love... ❤️",
  "Almost ready... ✨",
];

export default function LoadingScreen({ finishLoading }: Props) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            finishLoading();
          }, 600);

          return 100;
        }

        return prev + 2;
      });
    }, 60);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [finishLoading]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8FC] via-[#FFEAF5] to-[#FFDCEB]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[120px]" />

      <div className="relative z-20 flex w-full max-w-md flex-col items-center px-8">

        {/* Clara Photo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[60px]" />

          <img
            src={clara1}
            alt="Clara"
            className="relative h-36 w-36 rounded-full border-8 border-white object-cover shadow-[0_20px_60px_rgba(236,72,153,.25)]"
          />
        </motion.div>

        {/* Gift */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
          }}
          className="relative mt-5"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[50px]" />

          <img
            src={gift}
            alt="Gift"
            className="relative w-24 drop-shadow-[0_20px_60px_rgba(236,72,153,.25)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8 text-center text-4xl font-bold text-pink-700"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Preparing Your Surprise
        </motion.h1>

        {/* Clara */}
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-2 pb-2 text-center text-5xl leading-[1.25]"
          style={{
            fontFamily: "Great Vibes",
            background:
              "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 5px 20px rgba(236,72,153,.30)",
          }}
        >
          Clara
        </motion.h2>

        {/* Card */}
        <div className="mt-5 w-full rounded-3xl bg-white/75 p-6 shadow-xl backdrop-blur-xl">

          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.4,
              }}
              className="text-center text-[15px] leading-7 text-gray-700"
            >
              {loadingTexts[messageIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Progress */}
          <div className="mt-8">

            <div className="h-3 overflow-hidden rounded-full bg-pink-100">

              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <motion.p
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-4 text-center text-xl font-semibold text-pink-700"
            >
              {progress}%
            </motion.p>

          </div>

        </div>

        {/* Footer */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-8 text-center text-sm text-pink-500"
        >
          Made with ❤️ especially for Clara
        </motion.p>

      </div>

    </section>
  );
}