// Author: Manav Arya & Ashmit Dhown
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOTS = 3;
const BAR_LENGTH = 20;
const ANIMATION_SPEED = 300; // ms

const Welcome = () => {
  const [dotCount, setDotCount] = useState(0);
  const [barProgress, setBarProgress] = useState(0);
  const [show] = useState(true);

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDotCount((prev) => (prev + 1) % (DOTS + 1));
    }, ANIMATION_SPEED);
    return () => clearInterval(dotTimer);
  }, []);

  useEffect(() => {
    if (barProgress < BAR_LENGTH) {
      const barTimer = setTimeout(() => {
        setBarProgress((prev) => prev + 1);
      }, ANIMATION_SPEED);
      return () => clearTimeout(barTimer);
    }
  }, [barProgress]);

  // Optional: Hide loader after bar fills (for demo, not needed if App controls this)
  // useEffect(() => {
  //   if (barProgress === BAR_LENGTH) setTimeout(() => setShow(false), 500);
  // }, [barProgress]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-champagne/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 bg-velvet/20 rounded-full blur-2xl z-0"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <AnimatePresence>
        {show && (
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="text-4xl font-mono font-bold mb-6 text-velvet drop-shadow animate-fade-in"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: ["0.1em", "0.3em", "0.1em"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              LOADING{Array(dotCount).fill('.').join('')}
            </motion.div>
            <motion.div
              className="w-80 mx-auto mb-4 bg-onyx/20 rounded shadow-inner border border-velvet/30 h-6 flex items-center"
              initial={{ scaleX: 0.8, opacity: 0.7 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="h-4 bg-champagne rounded transition-all duration-200 shadow-lg"
                style={{ width: `${(barProgress / BAR_LENGTH) * 100}%`, minWidth: 8 }}
                initial={{ width: 0 }}
                animate={{ width: `${(barProgress / BAR_LENGTH) * 100}%` }}
                transition={{ duration: ANIMATION_SPEED / 1000, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="text-xs font-mono text-velvet/60 tracking-widest mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Please wait...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Welcome;