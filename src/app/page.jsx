"use client"

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from '@/components/Background';
import Screen1 from '@/components/screens/Screen1';
import Screen2 from '@/components/screens/Screen2';
import FinalScreen from '@/components/screens/FinalScreen';
import LyricsScreen from '@/components/screens/LyricsScreen';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const audioRef = useRef(null);

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
    setCurrentScreen(2);
  };

  const screens = [
    <Screen1 key="screen1" onNext={() => setCurrentScreen(1)} />,
    <Screen2 key="screen2" onNext={handleStartMusic} />,
    <LyricsScreen key="screen3" onComplete={() => setCurrentScreen(3)} />,
    <FinalScreen key="screen4" />
  ]

  return (
    <div className="min-h-screen text-pink-50 flex items-center justify-center overflow-hidden relative">
      <Background />

      <audio
        ref={audioRef}
        src="/audio/bg.mp3"
        preload="auto"
      />

      <div className="relative z-10 w-full max-w-100 p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.85, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 150, damping: 20 } }}
            exit={{ opacity: 0, scale: 0.9, y: -30, filter: "blur(10px)", transition: { duration: 0.4, ease: "easeInOut" } }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
        }}
        className="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div>
    </div>
  );
}
