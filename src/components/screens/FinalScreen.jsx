import { motion } from "framer-motion";

export default function FinalScreen() {
  return (
    <motion.div
    className="flex flex-col items-center text-center space-y-8"
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
      className="relative"
    >
      <motion.div
        className="absolute -inset-5 bg-pink-500/30 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="/gifs/hug.gif"
        alt="hug"
        className="h-54 relative z-10 drop-shadow-2xl"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring" }}
      className="bg-white/3 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-full relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-full bg-linear-to-b from-pink-500/5 to-transparent pointer-events-none" />

      <h1 className="text-4xl font-black mb-3 text-transparent bg-clip-text bg-linear-to-br from-pink-200 via-purple-200 to-indigo-200 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
        Forever Mine ❤️
      </h1>
      <p className="text-pink-200/80 font-medium text-lg">
        I love you so much ❤️
      </p>
    </motion.div>
  </motion.div>
  )
}