import { motion } from "framer-motion";

import giftOpened from "../../assets/gift-opened.png";

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

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 py-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
        >
          <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
            ✨ YOUR SURPRISE HAS ARRIVED ✨
          </span>
        </motion.div>

        {/* Gift */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
            rotate: -20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.9,
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
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[60px]" />

          <motion.img
            src={giftOpened}
            alt="Opened Gift"
            animate={{
              rotate: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="relative w-56 drop-shadow-[0_20px_60px_rgba(236,72,153,.25)]"
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
            delay: 0.3,
          }}
          className="mt-5 text-4xl font-bold text-pink-700"
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
            delay: 0.6,
          }}
          className="mt-2 text-2xl font-semibold text-rose-600"
        >
          Your Birthday Journey Begins ❤️
        </motion.h2>

        {/* Message */}
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
            delay: 0.9,
          }}
          className="mt-5 w-full max-w-sm rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur-xl"
        >
          <p className="text-sm leading-7 text-gray-700">
            Every surprise in this journey has been prepared
            with love, happiness and heartfelt wishes,
            especially for you.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            Let this celebration remind you how special,
            loved and appreciated you truly are.
          </p>
        </motion.div>

        {/* Hint */}
        <motion.p
          animate={{
            y: [0, -6, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
          }}
          className="mt-4 font-semibold text-pink-600"
        >
          👇 Continue to reveal more surprises
        </motion.p>

        {/* Button */}
        <div className="mt-4 w-full max-w-sm">
          <NextButton
            title="✨ CONTINUE THE JOURNEY ❤️"
            onClick={onNext}
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
            delay: 1.2,
          }}
          className="mt-4 text-xs text-pink-500"
        >
          More beautiful surprises are waiting for you 🌸
        </motion.p>

      </div>
    </Background>
  );
}