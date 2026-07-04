import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import clara1 from "../../assets/clara1.png";
import clara2 from "../../assets/clara2.png";

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

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-start px-6 pt-10 pb-8 text-center">

        {/* Counter */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="rounded-full bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl"
        >
          <span className="text-sm font-semibold tracking-widest text-pink-600">
            MEMORY {current + 1} OF {memories.length}
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -30,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full"
          >
            {/* Photo */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="relative mx-auto mt-8 w-fit"
            >
              <div className="absolute inset-0 rounded-[40px] bg-pink-300/30 blur-[55px]" />

              <div className="absolute -inset-3 rounded-[45px] border border-pink-200/50" />

              <img
                src={memories[current].image}
                alt="Memory"
                className="relative h-[410px] w-[300px] rounded-[40px] border-[10px] border-white object-cover shadow-[0_20px_60px_rgba(236,72,153,.25)]"
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="mt-8 text-4xl font-bold text-pink-700"
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
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .5,
              }}
              className="mx-auto mt-5 w-full max-w-sm rounded-3xl bg-white/70 p-5 shadow-xl backdrop-blur-xl"
            >
              <p className="text-[15px] leading-8 text-gray-700">
                {memories[current].caption}
              </p>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* Button */}
        <div className="mt-auto w-full max-w-sm pt-8">
          <NextButton
            title={
              current === memories.length - 1
                ? "Continue ❤️"
                : "Next Memory ❤️"
            }
            onClick={handleNext}
          />
        </div>

      </div>
    </Background>
  );
}