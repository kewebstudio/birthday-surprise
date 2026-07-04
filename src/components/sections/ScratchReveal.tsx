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

      <div className="relative z-20 flex h-full w-full flex-col px-6 py-6">

        <AnimatePresence mode="wait">

          {!revealed ? (

            <motion.div
              key="gift-card"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="flex h-full flex-col items-center justify-center text-center"
            >

              {/* Badge */}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
                  ✨ SECRET SURPRISE ✨
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-center text-4xl font-bold text-pink-700"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                One More Surprise
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-5 max-w-sm text-sm leading-7 text-gray-700"
              >
                A beautiful birthday surprise
                is waiting especially for you.

                <br />
                <br />

                Tap the magical gift below
                to reveal your message.
              </motion.p>

              {/* Gift Card */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setRevealed(true)}
                className="relative mt-7 w-full max-w-sm cursor-pointer overflow-hidden rounded-[32px] bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-8 shadow-[0_25px_70px_rgba(236,72,153,.30)]"
              >

                {/* Shine */}

                <motion.div
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-full w-20 -skew-x-12 bg-white/20"
                />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-4, 4, -4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.8,
                  }}
                >
                  <FaGift
                    size={72}
                    className="mx-auto text-white"
                  />
                </motion.div>

                <h2
                  className="mt-6 text-3xl text-white"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  Tap To Reveal
                </h2>

                <p className="mt-4 text-sm leading-7 text-pink-100">
                  Someone has prepared
                  a heartfelt birthday message
                  just for you.
                </p>

              </motion.div>

              {/* Hint */}

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="mt-5 text-sm font-semibold text-pink-600"
              >
                👆 Tap the gift to reveal your surprise
              </motion.p>

            </motion.div>

          ) : (
                        <motion.div
              key="message"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="flex h-full flex-col justify-center"
            >

              {/* Message Card */}

              <div className="rounded-[32px] bg-white/80 p-6 shadow-2xl backdrop-blur-xl">

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                  }}
                >
                  <FaHeart
                    className="mx-auto text-pink-500"
                    size={64}
                  />
                </motion.div>

                {/* Name */}

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 px-2 pb-3 text-center text-6xl leading-[1.3] overflow-visible"
                  style={{
                    fontFamily: "Great Vibes",
                    fontWeight: 400,
                    background:
                      "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow:
                      "0 6px 20px rgba(236,72,153,.30)",
                  }}
                >
                  Clara
                </motion.h2>

                {/* Heading */}

                <h3
                  className="mt-2 text-center text-3xl font-bold text-pink-700"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  Happy Birthday ❤️
                </h3>

                {/* Wishes */}

                <div className="mt-6 rounded-3xl bg-pink-50 p-5">

                  <p className="text-sm leading-7 text-gray-700">
                    May every sunrise bring hope,
                    every smile fill your heart with joy,
                    and every dream guide you
                    toward a beautiful future.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-700">
                    Stay blessed.
                    Stay kind.
                    Stay beautiful.
                    Never stop believing
                    in yourself because
                    amazing things are waiting
                    ahead for you.
                  </p>

                  <motion.p
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="mt-5 text-center text-lg font-semibold text-pink-600"
                  >
                    Wishing you a lifetime
                    of happiness ❤️
                  </motion.p>

                </div>

              </div>

              {/* Bottom */}

              <div className="pt-6">

                <motion.p
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="mb-3 text-center text-sm font-semibold text-pink-600"
                >
                  👇 Continue your birthday journey
                </motion.p>

                <NextButton
                  title="✨ Continue ❤️"
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