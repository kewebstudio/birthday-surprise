import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onReplay: () => void;
}

export default function FinalScreen({ onReplay }: Props) {
  return (
    <Background>
      <ProgressBar current={8} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-5 py-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="rounded-full border border-pink-100 bg-white/85 px-5 py-2 shadow-lg backdrop-blur-xl"
        >
          <span className="text-[10px] font-semibold tracking-[0.22em] text-pink-600">
            🎉 CELEBRATION COMPLETE 🎉
          </span>
        </motion.div>

        {/* Heart */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-4"
        >
          <FaHeart
            size={48}
            className="text-pink-500 drop-shadow-xl"
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
          className="mt-3 text-3xl font-bold text-pink-700"
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
          className="mt-1 text-center text-5xl leading-tight sm:text-6xl"
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

        {/* Blessing Card */}

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
            delay: 0.6,
          }}
          className="mt-5 w-full max-w-sm rounded-3xl border border-pink-100 bg-white/85 p-5 shadow-xl backdrop-blur-xl"
        >
          <p className="text-sm leading-7 text-gray-700">
            May God fill your life with
            happiness, peace, love and
            countless blessings.
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-700">
            Keep smiling, stay blessed,
            and may all your dreams
            come true. ❤️
          </p>
        </motion.div>
                {/* Button */}

        <div className="mt-5 w-full max-w-sm">

          <NextButton
            title="🎁 WATCH AGAIN"
            onClick={onReplay}
          />

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
            Made with ❤️ especially for Clara
          </motion.p>

        </div>

      </div>

    </Background>
  );
}