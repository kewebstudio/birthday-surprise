import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gift from "../../assets/gift-closed.jpg";
import clara1 from "../../assets/clara1.jpg";

interface Props {
  finishLoading: () => void;
}

const loadingTexts = [
  "Wrapping your birthday surprise... 🎁",
  "Collecting beautiful memories... 🌸",
  "Adding lots of love and blessings... ❤️",
  "Preparing something magical... ✨",
];

export default function LoadingScreen({
  finishLoading,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            finishLoading();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 55);

    const messageInterval = setInterval(() => {
      setMessageIndex(
        (prev) => (prev + 1) % loadingTexts.length
      );
    }, 1300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [finishLoading]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF8FC] via-[#FFEAF5] to-[#FFDCEB]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[120px]" />

      {/* Floating Sparkles */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-12 top-16 text-3xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-10 top-24 text-4xl"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -14, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
        }}
        className="absolute bottom-24 left-10 text-3xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{
          y: [0, 14, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute bottom-20 right-12 text-3xl"
      >
        ✨
      </motion.div>

      <div className="relative z-20 flex w-full max-w-md flex-col items-center px-6">

        {/* Clara Image */}

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
          <div className="absolute inset-0 rounded-full bg-pink-300/40 blur-[60px]" />

          <div className="absolute -inset-2 rounded-full border border-pink-200/70" />

          <img
            src={clara1}
            alt="Clara"
            className="relative h-40 w-40 rounded-full border-[8px] border-white object-cover shadow-[0_25px_70px_rgba(236,72,153,.28)]"
          />
        </motion.div>

        {/* Gift */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
          }}
          className="relative mt-4"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[40px]" />

          <img
            src={gift}
            alt="Gift"
            className="relative w-20 drop-shadow-[0_20px_60px_rgba(236,72,153,.30)]"
          />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-7 text-center text-4xl font-bold text-pink-700"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Preparing Your
          <br />
          Birthday Surprise
        </motion.h1>
                {/* Clara Name */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 px-2 pb-3 text-center text-5xl leading-[1.25] overflow-visible"
          style={{
            fontFamily: "Great Vibes",
            fontWeight: 400,
            background:
              "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 6px 20px rgba(236,72,153,.30)",
          }}
        >
          Clara
        </motion.h2>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-5 w-full rounded-[28px] bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="text-center text-[15px] leading-7 text-gray-700"
            >
              {loadingTexts[messageIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Progress */}

          <div className="mt-7">

            <div className="h-3 overflow-hidden rounded-full bg-pink-100">

              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  ease: "linear",
                }}
              />

            </div>

            {/* Percentage */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-5 flex justify-center"
            >
              <div className="rounded-full bg-pink-100 px-6 py-2 shadow-lg">
                <span className="text-xl font-bold text-pink-700">
                  {progress}%
                </span>
              </div>
            </motion.div>

          </div>

        </motion.div>

        {/* Bottom Text */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-7 text-center text-sm font-medium text-pink-600"
        >
          Please wait while we prepare something magical for you ✨
        </motion.p>

        {/* Footer */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-3 text-center text-xs text-pink-500"
        >
          Made with ❤️ especially for Clara
        </motion.p>

      </div>

    </section>
  );
}