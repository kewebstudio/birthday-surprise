import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import cake from "../../assets/cake.jpg";

import Background from "../common/Background";
import ProgressBar from "../common/ProgressBar";
import NextButton from "../common/NextButton";

interface Props {
  onNext: () => void;
}

export default function Cake({ onNext }: Props) {
  const [blown, setBlown] = useState(false);

  const celebrate = () => {
    if (blown) return;

    setBlown(true);

    confetti({
      particleCount: 250,
      spread: 90,
      origin: { y: 0.65 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 140,
        spread: 120,
        origin: { x: 0.15, y: 0.65 },
      });

      confetti({
        particleCount: 140,
        spread: 120,
        origin: { x: 0.85, y: 0.65 },
      });
    }, 300);
  };

  return (
    <Background>
      <ProgressBar current={6} total={8} />

      <div className="relative z-20 flex h-full flex-col px-5 pt-5 pb-5">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="rounded-full border border-pink-100 bg-white/90 px-5 py-2 shadow-lg backdrop-blur-xl">
            <span className="text-[10px] font-semibold tracking-[0.22em] text-pink-600">
              🎂 MAKE A WISH 🎂
            </span>
          </div>

          <h1
            className="mt-3 text-center text-3xl font-bold text-pink-700"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Birthday Cake
          </h1>

          <p className="mt-2 text-center text-sm leading-6 text-gray-700">
            Close your eyes,
            <br />
            make a beautiful wish.
          </p>
        </motion.div>

        {/* Cake */}

<div className="mt-5 flex justify-center">

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
    }}
    className="relative"
  >

    <div className="absolute inset-0 rounded-full bg-pink-300/40 blur-[70px]" />

    <img
      src={cake}
      alt="Cake"
      className="relative w-72 sm:w-80 md:w-[340px] drop-shadow-[0_30px_80px_rgba(236,72,153,.28)]"
    />

    {!blown && (
      <>
        <motion.div
          className="absolute left-[24%] top-[11%] text-2xl"
          animate={{
            opacity: [1, .4, 1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: .6,
          }}
        >
          🕯️
        </motion.div>

        <motion.div
          className="absolute left-[42%] top-[8%] text-2xl"
          animate={{
            opacity: [1, .4, 1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: .6,
            delay: .2,
          }}
        >
          🕯️
        </motion.div>

        <motion.div
          className="absolute left-[60%] top-[11%] text-2xl"
          animate={{
            opacity: [1, .4, 1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: .6,
            delay: .4,
          }}
        >
          🕯️
        </motion.div>
      </>
    )}

    <AnimatePresence>

      {blown && (

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: .45,
          }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        >

          <div className="rounded-full bg-white/95 px-6 py-3 shadow-2xl backdrop-blur-xl">

            <span className="text-lg font-semibold text-pink-600">
              🎉 Wish Granted ❤️
            </span>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </motion.div>

</div>
                {/* Bottom */}

        <div className="mt-auto pb-2">

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
            }}
            className="text-center text-sm leading-6 text-gray-700"
          >
            {blown
              ? "May every wish you made today come true. ❤️"
              : "Tap below when you're ready to make your wish."}
          </motion.p>

          <motion.p
            animate={{
              y: [0, -4, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
            }}
            className="mt-3 text-center text-sm font-semibold text-pink-600"
          >
            {blown
              ? "👇 Continue your birthday journey"
              : "👇 Blow out the candles"}
          </motion.p>

          <div className="mt-3 mx-auto w-full max-w-sm">

            {!blown ? (
              <NextButton
                title="🕯️ BLOW THE CANDLES"
                onClick={celebrate}
              />
            ) : (
              <NextButton
                title="✨ CONTINUE ❤️"
                onClick={onNext}
              />
            )}

          </div>

        </div>

      </div>

    </Background>
  );
}