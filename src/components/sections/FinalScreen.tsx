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

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-start px-6 pt-10 pb-8 text-center">

        {/* Celebration Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-pink-600">
            🎉 CELEBRATION COMPLETE 🎉
          </span>
        </motion.div>

        {/* Animated Heart */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-7"
        >
          <FaHeart
            className="text-pink-500 drop-shadow-[0_10px_25px_rgba(236,72,153,.35)]"
            size={72}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-5xl font-bold text-pink-700"
          style={{ fontFamily: "Playfair Display" }}
        >
          Happy Birthday
        </motion.h1>

        {/* Name */}
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.45 }}
  className="mt-2 px-2 pb-3 leading-[1.25] text-center text-7xl md:text-8xl overflow-visible"
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

        {/* Blessing Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-7 w-full max-w-md rounded-[32px] bg-white/75 p-6 shadow-2xl backdrop-blur-xl"
        >
          <p className="text-[15px] leading-8 text-gray-700">
            May this birthday fill your heart with joy,
            your life with peace,
            and your future with endless success.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-gray-700">
            May every dream become reality,
            every prayer be answered,
            and every day bring another reason to smile.
          </p>

          <motion.p
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-6 text-lg font-semibold text-pink-600"
          >
            May God bless you today,
            tomorrow and always. ❤️
          </motion.p>
        </motion.div>

        {/* Celebration Icons */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-6 text-3xl"
        >
          🎂 ✨ 🌸 🎈 💖 ✨
        </motion.div>

        {/* Replay Button */}
        <div className="mt-auto w-full max-w-sm pt-8">
          <NextButton
            title="🎁 Watch Again"
            onClick={onReplay}
          />
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 text-sm text-pink-500"
        >
          Made with ❤️ especially for Clara
        </motion.p>

      </div>
    </Background>
  );
}