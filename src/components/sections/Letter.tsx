import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import closedLetter from "../../assets/letter-closed.jpg";

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

      <div className="relative z-20 flex h-full w-full flex-col px-5 py-7">

        <AnimatePresence mode="wait">

          {!opened ? (

            <motion.div
              key="closed"
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .5,
              }}
              className="flex flex-1 flex-col items-center justify-center text-center"
            >

              {/* Badge */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: .45,
                }}
                className="rounded-full border border-pink-100 bg-white/85 px-5 py-2 shadow-lg backdrop-blur-xl"
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
                  💌 A SPECIAL LETTER 💌
                </span>
              </motion.div>

              {/* Envelope */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="relative mt-8"
              >

                <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[40px]" />

                <motion.img
                  src={closedLetter}
                  alt="Letter"
                  animate={{
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.8,
                  }}
                  className="relative w-36 sm:w-40 md:w-44 drop-shadow-2xl"
                />

                {/* Wax Seal */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="absolute left-1/2 top-[57%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg"
                >
                  <FaHeart
                    className="text-white"
                    size={14}
                  />
                </motion.div>

              </motion.div>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .2,
                }}
                className="mt-7 text-3xl font-bold text-pink-700 sm:text-4xl"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                A Letter For You
              </motion.h2>

              {/* Message */}

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
                  delay: .35,
                }}
                className="mt-5 w-full max-w-[320px] rounded-3xl border border-pink-100 bg-white/85 p-4 shadow-xl backdrop-blur-xl"
              >

                <p className="text-sm leading-7 text-gray-700">
                  Someone has written a heartfelt
                  birthday letter especially for you.
                </p>

                <div className="my-4 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

                <p className="text-sm leading-7 text-gray-700">
                  Open the envelope and discover
                  a message filled with love.
                </p>

              </motion.div>

              {/* Hint */}

              <motion.p
                animate={{
                  y: [0, -3, 0],
                  opacity: [.6,1,.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="mt-6 text-sm font-semibold text-pink-600"
              >
                👇 Tap below to open your letter
              </motion.p>

              {/* Button */}

              <div className="mt-4 w-full max-w-sm">
                <NextButton
                  title="💌 OPEN MY LETTER"
                  onClick={() => setOpened(true)}
                />
              </div>

            </motion.div>

          ) : (
                        <motion.div
              key="opened"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex flex-1 flex-col justify-center"
            >

              {/* Envelope moves up */}

              <motion.div
                initial={{
                  y: 0,
                  scale: 1,
                }}
                animate={{
                  y: -18,
                  scale: 0.92,
                  opacity: 0.25,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="mx-auto"
              >
                <img
                  src={closedLetter}
                  alt="Envelope"
                  className="w-28"
                />
              </motion.div>

              {/* Letter */}

              <motion.div
                initial={{
                  y: 90,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  y: -10,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mx-auto mt-2 w-full max-w-[320px] rounded-[26px] border border-[#F3DDCB] bg-[#FFF9F1] p-5 shadow-xl"
              >

                {/* Paper Line */}

                <div className="mb-4 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

                {/* Dear */}

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
                  className="pb-2 text-center text-4xl leading-[1.2]"
                  style={{
                    fontFamily: "Great Vibes",
                    background:
                      "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Dear Clara,
                </motion.h2>

                <div className="space-y-3 text-sm leading-6 text-gray-700">

                  <p>
                    Happy Birthday! 🎉
                  </p>

                  <p>
                    May today bring endless joy,
                    beautiful memories and countless smiles.
                  </p>

                  <p>
                    May God bless your life with
                    peace, love, strength and happiness
                    in every new chapter.
                  </p>

                  <p>
                    Keep smiling, keep shining,
                    and never stop believing in yourself.
                  </p>

                  <motion.p
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="pt-1 text-center font-semibold text-pink-600"
                  >
                    Have the happiest birthday ❤️
                  </motion.p>

                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

                <p
                  className="mt-4 text-center text-3xl"
                  style={{
                    fontFamily: "Great Vibes",
                    color: "#ec4899",
                  }}
                >
                  With Love 🌸
                </p>

              </motion.div>

              {/* Bottom */}

              <div className="mt-6">

                <motion.p
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="mb-3 text-center text-sm font-semibold text-pink-600"
                >
                  👇 Continue your birthday journey
                </motion.p>

                <div className="mx-auto w-full max-w-sm">
                  <NextButton
                    title="✨ CONTINUE ❤️"
                    onClick={onNext}
                  />
                </div>

                <p className="mt-4 text-center text-xs text-pink-500">
                  Every word was written with love 💖
                </p>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </Background>
  );
}