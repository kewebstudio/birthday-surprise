import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import clara1 from "../../assets/clara1.jpg";
import clara2 from "../../assets/clara2.jpg";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

const memories = [
  {
    image: clara1,
    title: "A Beautiful Smile ❤️",
    caption:
      "Your smile fills every heart with happiness. May it continue to shine brighter with every passing day.",
  },
  {
    image: clara2,
    title: "Stay Blessed 🌸",
    caption:
      "May your life always be surrounded by love, peace, happiness, success and countless beautiful memories.",
  },
];

export default function Gallery({ onNext }: Props) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < memories.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <Background>
      <ProgressBar current={3} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col px-5 py-5">

        <div className="flex flex-1 flex-col items-center justify-center text-center">

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="rounded-full border border-pink-100 bg-white/85 px-5 py-2 shadow-lg backdrop-blur-xl"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
              MEMORY {current + 1} OF {memories.length}
            </span>
          </motion.div>

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -25,
              }}
              transition={{
                duration: 0.55,
              }}
              className="w-full"
            >

              {/* Image */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="relative mx-auto mt-5 w-fit"
              >
                <div className="absolute inset-0 rounded-[34px] bg-pink-300/25 blur-2xl" />

                <img
                  src={memories[current].image}
                  alt="Memory"
                  loading="lazy"
                  decoding="async"
                  className="relative h-60 w-44 rounded-[28px] border-[6px] border-white object-cover shadow-2xl sm:h-72 sm:w-52 md:h-80 md:w-60"
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-5 text-3xl font-bold text-pink-700 sm:text-4xl"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {memories[current].title}
              </motion.h2>

              {/* Caption */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="mx-auto mt-4 w-full max-w-sm rounded-3xl border border-pink-100 bg-white/85 p-5 shadow-xl backdrop-blur-xl"
              >
                <p className="text-sm leading-7 text-gray-700">
                  {memories[current].caption}
                </p>
              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>
                {/* Bottom Section */}

        <div className="mt-auto pt-5">

          {/* Hint */}

          <motion.p
            animate={{
              y: [0, -4, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mb-3 text-center text-sm font-semibold text-pink-600"
          >
            {current === memories.length - 1
              ? "👇 Tap below for your next surprise"
              : "👇 Tap below to reveal the next memory"}
          </motion.p>

          {/* Button */}

          <div className="mx-auto w-full max-w-sm">
            <NextButton
              title={
                current === memories.length - 1
                  ? "✨ CONTINUE ❤️"
                  : "📸 NEXT MEMORY"
              }
              onClick={handleNext}
            />
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
              delay: 0.8,
            }}
            className="mt-4 text-center text-xs text-pink-500"
          >
            Every memory tells a beautiful story 🌸
          </motion.p>

        </div>

      </div>

    </Background>
  );
}