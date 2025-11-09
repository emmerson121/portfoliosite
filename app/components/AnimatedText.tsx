"use client";

import { motion } from "framer-motion";

export default function AnimatedText() {
  const text = "Hi, I'm Ebiefie Emmanuel";

  // Split text into parts so we can style them separately
  const beforeName = "Hi, I'm ";
  const name = "Ebiefie Emmanuel";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: `0.5em` },
    visible: { opacity: 1, y: `0em`, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="text-2xl md:text-5xl font-bold flex justify-center mb-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Part 1: Regular white text */}
      {beforeName.split("").map((char, index) => (
        <motion.span key={index} variants={child} className="text-white">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {/* Part 2: Colored name text */}
      {name.split("").map((char, index) => (
        <motion.span
          key={beforeName.length + index}
          variants={child}
          style={{ color: "#397eff" }} // 👈 apply color here
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
