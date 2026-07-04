import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  return (
    <div className="absolute top-2 left-4 right-4 z-50 flex gap-1.5">

      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25 backdrop-blur-sm"
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600"
            initial={{
              width: index < current ? "100%" : "0%",
            }}
            animate={{
              width:
                index < current
                  ? "100%"
                  : index === current
                  ? "100%"
                  : "0%",
            }}
            transition={{
              duration: index === current ? 0.7 : 0,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

    </div>
  );
}