import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import closedLetter from "../../assets/letter-closed.png";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function Letter({ onNext }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <Background>
      <ProgressBar current={5} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col px-6 py-6">

        <AnimatePresence mode="wait">

          {!opened ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full flex-col items-center justify-center text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
                  💌 A SPECIAL LETTER 💌
                </span>
              </motion.div>

              {/* Letter */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="relative mt-6"
              >
                <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[55px]" />

                <img
                  src={closedLetter}
                  alt="Letter"
                  className="relative w-60 drop-shadow-[0_20px_60px_rgba(236,72,153,.25)]"
                />
              </motion.div>

              {/* Heading */}
              <h2
                className="mt-6 text-4xl font-bold text-pink-700"
                style={{ fontFamily: "Playfair Display" }}
              >
                A Letter For You
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-gray-700">
                Someone wrote these words especially for you.
                Open the letter and enjoy every beautiful message.
              </p>

              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="mt-5 font-semibold text-pink-600"
              >
                👇 Tap below to open your letter
              </motion.p>

              <div className="mt-5 w-full max-w-sm">
                <NextButton
                  title="💌 Open My Letter"
                  onClick={() => setOpened(true)}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="flex h-full flex-col"
            >
              {/* Scrollable Letter */}
              <div
                className="flex-1 overflow-y-auto rounded-[30px] bg-[#FFFDF8] p-6 shadow-2xl"
                style={{
                  boxShadow:
                    "0 20px 60px rgba(236,72,153,.18)",
                }}
              >
                <h2
                  className="text-center text-5xl text-pink-600"
                  style={{
                    fontFamily: "Great Vibes",
                  }}
                >
                  Dear Clara,
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-700">

                  <p>Happy Birthday! 🎉</p>

                  <p>
                    Today is a celebration of the wonderful
                    person you are and the joy you bring
                    into the lives of everyone around you.
                  </p>

                  <p>
                    May your heart always be filled with
                    happiness, peace, hope and beautiful
                    memories that last forever.
                  </p>

                  <p>
                    I pray that God blesses every step
                    of your journey with strength,
                    wisdom, love and endless success.
                  </p>

                  <p>
                    Keep smiling because your smile
                    lights up every room and makes
                    the world a happier place.
                  </p>

                  <p>
                    Never stop believing in yourself.
                    The best chapters of your life
                    are still waiting to be written.
                  </p>

                  <p className="text-center text-lg font-semibold text-pink-600">
                    Have the happiest birthday ever! ❤️
                  </p>

                  <p
                    className="text-center text-4xl text-pink-500"
                    style={{
                      fontFamily: "Great Vibes",
                    }}
                  >
                    With Love
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <div className="pt-5">
                <motion.p
                  animate={{
                    opacity: [0.5, 1, 0.5],
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