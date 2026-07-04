import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import cake from "../../assets/cake.png";

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
      particleCount: 220,
      spread: 100,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.15, y: 0.65 },
      });

      confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.85, y: 0.65 },
      });
    }, 350);
  };

  return (
    <Background>
      <ProgressBar current={6} total={8} />

      <div className="relative z-20 flex h-full w-full flex-col px-6 py-6">

        <div className="flex flex-1 flex-col items-center justify-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] text-pink-600">
              🎂 MAKE A WISH 🎂
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl font-bold text-pink-700"
            style={{ fontFamily: "Playfair Display" }}
          >
            Birthday Cake
          </motion.h1>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 w-full max-w-sm rounded-3xl bg-white/75 p-5 shadow-xl backdrop-blur-xl"
          >
            <p className="text-[15px] leading-8 text-gray-700">
              Close your eyes, make a beautiful wish,
              then blow out the candles.

              <br />
              <br />

              May God bless every dream in your heart
              and fill your life with endless joy,
              peace and happiness. ❤️
            </p>
          </motion.div>

          {/* Cake */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="relative mt-7"
          >
            <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-[60px]" />

            <img
              src={cake}
              alt="Birthday Cake"
              className="relative w-72 drop-shadow-[0_20px_60px_rgba(236,72,153,.25)]"
            />

            {!blown && (
              <>
                <motion.div
                  className="absolute left-[24%] top-[11%] text-2xl"
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                  }}
                >
                  🕯️
                </motion.div>

                <motion.div
                  className="absolute left-[42%] top-[8%] text-2xl"
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  🕯️
                </motion.div>

                <motion.div
                  className="absolute left-[60%] top-[11%] text-2xl"
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: 0.4,
                  }}
                >
                  🕯️
                </motion.div>
              </>
            )}

            {blown && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="rounded-3xl bg-white/90 px-7 py-5 shadow-2xl backdrop-blur-xl">

                  <motion.h2
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                    className="text-2xl font-bold text-pink-600"
                  >
                    🎉 Wish Granted!
                  </motion.h2>

                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    May God bless you with happiness,
                    good health, peace, success
                    and endless love.
                  </p>

                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom Button */}
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
            {blown
              ? "👇 Continue your birthday celebration"
              : "👇 Tap below to blow the candles"}
          </motion.p>

          {!blown ? (
            <NextButton
              title="🕯️ Blow The Candles"
              onClick={celebrate}
            />
          ) : (
            <NextButton
              title="Continue ❤️"
              onClick={onNext}
            />
          )}

        </div>

      </div>
    </Background>
  );
}