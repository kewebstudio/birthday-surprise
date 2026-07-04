import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface NextButtonProps {
  title?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export default function NextButton({
  title = "Continue",
  onClick,
  className = "",
  disabled = false,
}: NextButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-pink-500
        via-rose-500
        to-pink-600
        px-8
        text-lg
        font-semibold
        text-white
        shadow-2xl
        transition-all
        duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {/* Glow */}
      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10">
        {title}
      </span>

      <motion.span
        className="relative z-10"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        <FaArrowRight />
      </motion.span>
    </motion.button>
  );
}