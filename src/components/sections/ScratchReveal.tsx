import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGift, FaHeart } from "react-icons/fa";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function ScratchReveal({ onNext }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Background>
      <ProgressBar current={4} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col justify-start px-6 pt-10 pb-8">

        <AnimatePresence mode="wait">

          {!revealed ? (

            <motion.div
              key="card"
              initial={{ opacity: 0, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center"
            >

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="rounded-full bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl"
              >
                <span className="text-xs font-semibold tracking-[0.25em] text-pink-600">
                  ✨ SECRET SURPRISE ✨
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-5xl font-bold text-pink-700"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                One More Surprise
              </motion.h1>

              <p className="mt-5 max-w-sm text-[15px] leading-8 text-gray-700">
                A beautiful birthday message
                is waiting just for you.

                <br />
                <br />

                Tap the magical gift to reveal it.
              </p>

              {/* Gift Card */}
              <motion.div
                whileTap={{ scale: .96 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setRevealed(true)}
                className="relative mt-8 w-full max-w-sm cursor-pointer overflow-hidden rounded-[35px] bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-8 shadow-2xl"
              >
                <div className="absolute inset-0 bg-white/10" />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                  }}
                >
                  <FaGift
                    className="mx-auto text-white"
                    size={70}
                  />
                </motion.div>

                <h2
                  className="mt-6 text-4xl text-white"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  Tap To Reveal
                </h2>

                <p className="mt-4 text-pink-100">
                  Something special is waiting...
                </p>

              </motion.div>

            </motion.div>

          ) : (

            <motion.div
              key="message"
              initial={{
                opacity: 0,
                scale: .85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .7,
              }}
              className="flex h-full flex-col"
            >

              <div className="rounded-[35px] bg-white/75 p-7 shadow-2xl backdrop-blur-xl">

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                  }}
                >
                  <FaHeart
                    className="mx-auto text-pink-500"
                    size={62}
                  />
                </motion.div>

                <motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.25 }}
  className="mt-5 px-2 pb-2 text-center text-6xl leading-[1.25] overflow-visible"
  style={{
    fontFamily: "Great Vibes",
    fontWeight: 400,
    background:
      "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 5px 20px rgba(236,72,153,.30)",
  }}
>
  Clara
</motion.h2>

                <h3
                  className="mt-2 text-center text-3xl font-bold text-pink-700"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  Happy Birthday ❤️
                </h3>

                <div className="mt-6 rounded-3xl bg-pink-50 p-5">

                  <p className="text-[15px] leading-8 text-gray-700">
                    May every sunrise bring hope,
                    every smile bring happiness,
                    and every dream guide you
                    toward a beautiful future.
                  </p>

                  <p className="mt-5 text-[15px] leading-8 text-gray-700">
                    Stay blessed,
                    stay kind,
                    stay beautiful,
                    and never stop believing
                    in yourself.
                  </p>

                  <p className="mt-6 text-center text-lg font-semibold text-pink-600">
                    Wishing you a lifetime of joy ❤️
                  </p>

                </div>

              </div>

              <div className="mt-auto pt-8">
                <NextButton
                  title="Continue ❤️"
                  onClick={onNext}
                />
              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </Background>
  );
}