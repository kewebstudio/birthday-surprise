import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import clara1 from "../../assets/clara1.jpg";

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

      <div className="relative z-20 flex h-full w-full flex-col justify-between px-5 py-5">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-pink-100 bg-white/85 px-5 py-2 shadow-lg backdrop-blur-lg"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
              ✨ TODAY IS YOUR SPECIAL DAY ✨
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
              y: [0, -6, 0],
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
            <div className="absolute inset-0 rounded-full bg-pink-300/25 blur-2xl" />

            <div className="absolute -inset-2 rounded-full border border-pink-200/50" />

            <img
              src={clara1}
              alt="Clara"
              loading="lazy"
              decoding="async"
              className="relative h-44 w-44 rounded-full border-[6px] border-white object-cover shadow-2xl sm:h-52 sm:w-52 md:h-56 md:w-56"
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
            className="mt-5 text-center text-3xl font-bold text-pink-700 sm:text-4xl"
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
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
            className="mt-1 px-2 pb-2 text-center text-5xl leading-[1.25] sm:text-6xl md:text-7xl"
            style={{
              fontFamily: "Great Vibes",
              fontWeight: 400,
              background:
                "linear-gradient(90deg,#ec4899,#fb7185,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 5px 20px rgba(236,72,153,.25)",
            }}
          >
            Clara
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
              delay: 0.7,
            }}
            className="mt-5 w-full max-w-sm rounded-3xl border border-pink-100 bg-white/85 p-5 shadow-xl backdrop-blur-xl"
          >
            <p className="text-sm leading-7 text-gray-700 sm:text-[15px]">
              Today is a celebration of your beautiful heart,
              your wonderful smile and every blessing that
              makes you so special.
            </p>

            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

            <p className="text-sm leading-7 text-gray-700 sm:text-[15px]">
              May God fill your life with endless happiness,
              peace, love, success and unforgettable
              memories. May every dream in your heart
              come true and may every new day bring
              another reason to smile.
            </p>
          </motion.div>

          {/* Hearts */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-5 flex items-center gap-3"
          >
            <FaHeart
              className="text-pink-300"
              size={20}
            />

            <FaHeart
              className="text-pink-500"
              size={30}
            />

            <FaHeart
              className="text-pink-300"
              size={20}
            />
          </motion.div>

          {/* Hint */}
          <motion.p
            animate={{
              y: [0, -4, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="mt-4 text-sm font-semibold text-pink-600"
          >
            👇 Tap below to continue your birthday journey
          </motion.p>

        </div>

        {/* Bottom */}
        <div className="w-full">

          <div className="mx-auto w-full max-w-sm">
            <NextButton
              title="✨ CONTINUE ❤️"
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
            Every page holds another beautiful surprise 🌸
          </motion.p>

        </div>

      </div>
    </Background>
  );
}