import { motion } from "framer-motion";

import giftOpened from "../../assets/gift-opened.jpg";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function GiftOpening({ onNext }: Props) {
  return (
    <Background>
      <ProgressBar current={1} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col justify-between px-5 py-5">

        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-full border border-pink-100 bg-white/85 px-5 py-2 shadow-lg backdrop-blur-lg"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
              ✨ YOUR SURPRISE HAS ARRIVED ✨
            </span>
          </motion.div>

          {/* Gift */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -6, 0],
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 12,
              y: {
                repeat: Infinity,
                duration: 3,
              },
            }}
            className="relative mt-5"
          >
            <div className="absolute inset-0 rounded-full bg-pink-300/25 blur-2xl" />

            <motion.img
              src={giftOpened}
              alt="Opened Gift"
              loading="lazy"
              decoding="async"
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="relative w-52 drop-shadow-2xl sm:w-56 md:w-64"
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
            transition={{
              delay: .25,
            }}
            className="mt-5 text-3xl font-bold text-pink-700 sm:text-4xl"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Surprise!
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .45,
            }}
            className="mt-2 text-xl font-semibold text-rose-600 sm:text-2xl"
          >
            Your Birthday Journey Begins ❤️
          </motion.h2>

          {/* Message Card */}
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
              delay: .7,
            }}
            className="mt-5 w-full max-w-sm rounded-3xl border border-pink-100 bg-white/85 p-5 shadow-xl backdrop-blur-lg"
          >
            <p className="text-sm leading-7 text-gray-700 sm:text-[15px]">
              Every surprise in this journey has been
              prepared with love, happiness and heartfelt
              wishes, especially for you.
            </p>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

            <p className="text-sm leading-7 text-gray-700 sm:text-[15px]">
              Let this celebration remind you how special,
              loved and appreciated you truly are.
            </p>
          </motion.div>
                    {/* Hint */}
          <motion.p
            animate={{
              y: [0, -4, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-5 text-sm font-semibold text-pink-600"
          >
            👇 Tap below to continue your magical journey
          </motion.p>

        </div>

        {/* Bottom Section */}
        <div>

          <div className="mx-auto w-full max-w-sm">
            <NextButton
              title="✨ CONTINUE THE JOURNEY ❤️"
              onClick={onNext}
            />
          </div>

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
            className="mt-4 text-center text-xs text-pink-500"
          >
            More beautiful surprises are waiting for you 🌸
          </motion.p>

        </div>

      </div>
    </Background>
  );
}