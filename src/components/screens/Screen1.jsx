import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Screen1({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{  duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-7 bg-white/3 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden"
        >
            <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-pink-500/10 to-transparent pointer-events-none" />

            <motion.div
                className="relative"
            >
                <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full" />
                <img
                    src="/gifs/swinging.gif"
                    alt="Cute bear"
                    className="h-44 relative"
                />
            </motion.div>

            <div className="space-y-3 relative z-10">
                <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-br from-pink-200 via-pink-300 to-rose-200 drop-shadow-[0_2px_10px_rgba(244,114,182,0.3)] leading-tight">
                    I have something for you...
                </h1>
                <p className="text-pink-200/70 font-medium text-lg">
                    It will only take a moment
                </p>
            </div>

            <motion.button
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="w-full mt-2 px-8 py-4 bg-linear-to-r from-[#ff4d6d] to-[#ff758f] rounded-4xl font-semibold text-white shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all flex items-center justify-center gap-2 text-lg relative group overflow-hidden will-change-transform"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Open it <Heart className="w-5 h-5 fill-current" />
                </span>
            </motion.button>
        </motion.div>
    )
}