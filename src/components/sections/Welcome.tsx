import { motion } from "framer-motion";

import giftClosed from "../../assets/gift-closed.jpg";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function Welcome({ onNext }: Props) {
  return (
    <Background>
      <ProgressBar current={0} total={8} />

      {/* Main Container */}
      <div className="relative z-20 flex h-full w-full flex-col px-6 pt-8 pb-6">

        {/* Center Content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
          >
            <span className="text-[10px] font-semibold tracking-[0.22em] text-pink-600">
              ✨ A SPECIAL SURPRISE AWAITS ✨
            </span>
          </motion.div>

          {/* Gift */}
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
            className="relative mt-4"
          >
            <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[45px]" />

            <motion.img
              src={giftClosed}
              alt="Birthday Gift"
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="relative w-44 drop-shadow-[0_18px_50px_rgba(236,72,153,.25)]"
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
              delay: 0.2,
            }}
            className="mt-4 text-3xl font-bold text-pink-700"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Happy Birthday
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
              delay: 0.4,
            }}
            className="mt-1 text-center text-5xl leading-tight"
            style={{
              fontFamily: "Great Vibes",
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

          {/* Welcome Card */}
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
              delay: 0.6,
            }}
            className="mt-3 w-full max-w-sm rounded-[28px] bg-white/80 p-4 shadow-xl backdrop-blur-xl"
          >
            <p className="text-sm leading-7 text-gray-700">
              Someone has prepared a magical birthday
              journey filled with beautiful memories,
              heartfelt wishes and wonderful surprises,
              created especially for you.
            </p>
          </motion.div>

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
            className="mt-3 text-sm font-semibold text-pink-600"
          >
            👇 Tap below to begin your birthday journey
          </motion.p>

        </div>
                {/* Bottom Section */}

        <div className="pt-2">

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
              delay: 0.8,
            }}
            className="mx-auto w-full max-w-sm"
          >
            <NextButton
              title="🎁 Open My Surprise"
              onClick={onNext}
            />
          </motion.div>

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
            className="mt-2 text-center text-xs text-pink-500"
          >
            Made with ❤️ especially for Clara
          </motion.p>

        </div>

      </div>

    </Background>
  );
}