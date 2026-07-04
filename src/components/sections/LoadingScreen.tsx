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
      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[120px]" />

      {/* Floating Sparkles */}

      <motion.div
        animate={{
          y: [0, -14, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-10 top-12 text-2xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, 14, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-10 top-16 text-3xl"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute bottom-16 left-10 text-2xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute bottom-14 right-10 text-2xl"
      >
        ✨
      </motion.div>

      <div className="relative z-20 flex w-full max-w-md flex-col items-center px-6">
                {/* Clara Image */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            duration: 0.7,
            y: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/35 blur-[45px]" />

          <div className="absolute -inset-2 rounded-full border border-pink-200/60" />

          <img
            src={clara1}
            alt="Clara"
            className="relative h-32 w-32 rounded-full border-8 border-white object-cover shadow-[0_18px_50px_rgba(236,72,153,.25)]"
          />
        </motion.div>

        {/* Gift */}

        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
          }}
          className="relative mt-3"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[35px]" />

          <img
            src={gift}
            alt="Gift"
            className="relative w-16 drop-shadow-[0_18px_40px_rgba(236,72,153,.28)]"
          />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-4 text-center text-3xl font-bold text-pink-700"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Preparing Your
          <br />
          Birthday Surprise
        </motion.h1>

        {/* Name */}

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
          }}
          className="mt-1 text-center text-4xl leading-tight"
          style={{
            fontFamily: "Great Vibes",
            background:
              "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow:
              "0 5px 18px rgba(236,72,153,.30)",
          }}
        >
          Clara
        </motion.h2>

        {/* Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-4 w-full rounded-3xl bg-white/85 p-5 shadow-xl backdrop-blur-xl"
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
                duration: 0.3,
              }}
              className="text-center text-sm leading-6 text-gray-700"
            >
              {loadingTexts[messageIndex]}
            </motion.p>

          </AnimatePresence>

          <div className="mt-5">

            <div className="h-2 overflow-hidden rounded-full bg-pink-100">

              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="mt-4 flex justify-center">

              <div className="rounded-full bg-pink-100 px-5 py-1.5 shadow">

                <span className="text-lg font-bold text-pink-700">
                  {progress}%
                </span>

              </div>

            </div>

          </div>

        </motion.div>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-4 text-center text-sm text-pink-600"
        >
          Please wait while we prepare something magical ✨
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-2 text-center text-xs text-pink-500"
        >
          Made with ❤️ especially for Clara
        </motion.p>

      </div>

    </section>
  );
}