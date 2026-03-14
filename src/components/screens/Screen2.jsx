import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"

export default function Screen2({ onNext }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-7 bg-white/3 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-rose-500/10 to-transparent pointer-events-none" />

      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-rose-500/20 blur-2xl rounded-full" />
        <img
          src="/gifs/holding.gif"
          alt="holding bear"
          className="h-44 relative"
        />
      </motion.div>

      <div className="space-y-3 relative z-10">
        <h1 className="text-[2rem] font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-rose-100 to-rose-400 drop-shadow-[0_0px_15px_rgba(244,113,133,0.4)] leading-tight relative z-10">
          You can't go too far from me <span className='text-white'>😌</span>
        </h1>
        <p className="text-pink-200/70 font-medium text-lg">
          Want to know why?
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-full mt-2 px-8 py-4 bg-linear-to-r from-[#fb7185] to-[#e11d48] rounded-4xl font-semibold text-white shadow-[0_0_25px_rgba(225,29,72,0.4)] transition-all flex items-center justify-center gap-2 text-lg group relative overflow-hidden will-change-transform"
      >
        <span className="relative z-10 flex items-center gap-2">
          Let me show you <MoveRight className="w-5 h-5" />
        </span>
      </motion.button>
    </motion.div>
  )
}