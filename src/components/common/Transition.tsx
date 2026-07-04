import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface TransitionProps {
  children: ReactNode;
  pageKey: string | number;
}

export default function Transition({
  children,
  pageKey,
}: TransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pageKey}
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -25,
          scale: 1.02,
          filter: "blur(8px)",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-screen w-full overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}