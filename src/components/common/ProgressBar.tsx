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
    <div className="absolute top-5 left-5 right-5 z-50 flex gap-2">

      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="h-1 flex-1 overflow-hidden rounded-full bg-white/30 backdrop-blur-sm"
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
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
              duration: index === current ? 0.8 : 0,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

    </div>
  );
}