import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function LyricsScreen({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(-1);

  const lyrics = [
    "Jaayegi tu jahan",
    "Aaunga main wahan",
    "Meri banegi tu",
    "Aana tujhe yahaan"
  ];

  useEffect(() => {
    const timings = [100, 1500, 3500, 5500];
    const timeouts = [];

    timings.forEach((time, index) => {
      const timeout = setTimeout(() => {
        setCurrentLine(index);
      }, time);
      timeouts.push(timeout);
    });

    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  const bars = useMemo(() => {
    return [1, 2, 3, 4, 5].map((i) => ({
      id: i,
      height: 20 + Math.random() * 20,
      duration: 0.6 + Math.random() * 0.4
    }))
  }, [])

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] text-center w-full relative"
    >
      <div className="space-y-6 w-full relative z-10 flex flex-col items-center">
        {lyrics.map((line, index) => {
          const isActive = currentLine === index;
          const isPast = currentLine > index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : (isPast ? 0.2 : 0),
                y: isActive ? 0 : (isPast ? -30 : 40),
                scale: isActive ? 1.1 : 0.9,
                filter: isActive ? "blur(0px)" : "blur(4px)"
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className={`absolute top-1/2 -translate-y-1/2 w-full text-4xl md:text-5xl font-black tracking-wide leading-tight will-change-transform ${isActive
                ? "text-transparent bg-clip-text bg-linear-to-b from-pink-100 to-rose-300 drop-shadow-[0_0_20px_rgba(244,114,182,0.6)] z-20"
                : "hidden z-0 pointer-events-none"
                }`}
            >
              {line}
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="absolute bottom-10 flex gap-1.5 items-end justify-center h-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: currentLine >= 0 ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            animate={{
              height: ["12px", `${bar.height}px`, "12px"],
              backgroundColor: ["#fbcfe8", "#f472b6", "#fbcfe8"]
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              delay: bar.id * 0.1,
              ease: "easeInOut"
            }}
            className="w-2.5 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.5)]"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};