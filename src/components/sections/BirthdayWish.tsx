import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import clara1 from "../../assets/clara1.png";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function BirthdayWish({ onNext }: Props) {
  return (
    <Background>
      <ProgressBar current={2} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 py-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
        >
          <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
            ✨ TODAY IS YOUR DAY ✨
          </span>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              repeat: Infinity,
              duration: 3,
            },
          }}
          className="relative mt-5"
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[55px]" />

          <img
            src={clara1}
            alt="Clara"
            className="relative h-56 w-56 rounded-full border-8 border-white object-cover shadow-[0_20px_60px_rgba(236,72,153,.25)]"
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
            delay: 0.25,
          }}
          className="mt-5 text-4xl font-bold text-pink-700"
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
    delay: 0.45,
  }}
  className="mt-1 px-2 pb-2 text-center text-6xl leading-[1.25] overflow-visible"
  style={{
    fontFamily: "Great Vibes",
    fontWeight: 400,
    background:
      "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 5px 18px rgba(236,72,153,.30)",
  }}
>
  Clara
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
            delay: 0.7,
          }}
          className="mt-5 w-full max-w-sm rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur-xl"
        >
          <p className="text-sm leading-7 text-gray-700">
            Today is a celebration of your beautiful heart,
            your wonderful smile and every blessing that
            makes you so special.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            May God fill your life with endless happiness,
            peace, love, success and unforgettable memories.
          </p>
        </motion.div>

        {/* Hearts */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-4 flex items-center gap-2"
        >
          <FaHeart className="text-pink-400" size={22} />
          <FaHeart className="text-pink-500" size={30} />
          <FaHeart className="text-pink-400" size={22} />
        </motion.div>

        {/* Hint */}
        <motion.p
          animate={{
            y: [0, -5, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
          }}
          className="mt-4 font-semibold text-pink-600"
        >
          👇 Continue your birthday journey
        </motion.p>

        {/* Button */}
        <div className="mt-4 w-full max-w-sm">
          <NextButton
            title="✨ CONTINUE ❤️"
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
            delay: 1,
          }}
          className="mt-4 text-xs text-pink-500"
        >
          Every screen has another surprise waiting 🌸
        </motion.p>

      </div>
    </Background>
  );
}