import { motion } from "framer-motion";
import flowers from "../../assets/flowers.png";

const flowerList = [
  {
    id: 1,
    size: "w-16",
    top: "5%",
    left: "5%",
    duration: 6,
    delay: 0,
  },
  {
    id: 2,
    size: "w-20",
    top: "12%",
    right: "6%",
    duration: 8,
    delay: 1,
  },
  {
    id: 3,
    size: "w-24",
    bottom: "8%",
    left: "2%",
    duration: 7,
    delay: 0.5,
  },
  {
    id: 4,
    size: "w-20",
    bottom: "10%",
    right: "3%",
    duration: 9,
    delay: 2,
  },
];

export default function FloatingFlowers() {
  return (
    <>
      {flowerList.map((flower) => (
        <motion.img
          key={flower.id}
          src={flowers}
          alt=""
          className={`absolute ${flower.size} pointer-events-none select-none opacity-70`}
          style={{
            top: flower.top,
            left: flower.left,
            right: flower.right,
            bottom: flower.bottom,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [-4, 4, -4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: flower.delay,
          }}
        />
      ))}
    </>
  );
}