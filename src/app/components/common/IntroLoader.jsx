
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function IntroLoader() {
    const [showLoader, setShowLoader] = useState(true);
    const [startExit, setStartExit] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        // Intro animation duration
        const exitTimer = setTimeout(() => {
            setStartExit(true);
        }, 2200);

        // Remove loader from DOM
        const removeTimer = setTimeout(() => {
            setShowLoader(false);
        }, 3300);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!showLoader) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] overflow-hidden bg-[#050505]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {/* ================= CENTER CONTENT ================= */}
                <motion.div
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center"
                    initial={{
                        opacity: 0,
                        scale: 0.85,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* Logo Circle */}
                    <motion.div
                        className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400/60 bg-yellow-400 shadow-[0_0_80px_rgba(250,204,21,0.2)] sm:h-36 sm:w-36"
                        initial={{
                            scale: 0,
                            rotate: -20,
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <span className="text-5xl font-black text-black sm:text-6xl">
                            5
                        </span>

                        {/* Star */}
                        <motion.span
                            className="absolute -right-2 -top-2 text-3xl text-yellow-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.4,
                            }}
                        >
                            ★
                        </motion.span>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        className="mt-7 text-center"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.9,
                        }}
                    >
                        <h1 className="text-2xl font-black uppercase tracking-[0.25em] text-white sm:text-4xl">
                            5 Star Fitness
                        </h1>

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.45em] text-yellow-400 sm:text-xs">
                            Buxar
                        </p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-white/40"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.3,
                            duration: 0.5,
                        }}
                    >
                        Train • Push • Grow
                    </motion.p>

                    {/* Loading Line */}
                    <motion.div
                        className="mt-8 h-[2px] w-44 overflow-hidden rounded-full bg-white/10 sm:w-56"
                    >
                        <motion.div
                            className="h-full origin-left bg-yellow-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                duration: 1.4,
                                delay: 0.9,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* ================= LEFT PANEL ================= */}
                <motion.div
                    className="absolute inset-y-0 left-0 z-20 w-1/2 bg-[#080808]"
                    initial={{ x: 0 }}
                    animate={{
                        x: startExit ? "-100%" : "0%",
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                >
                    {/* Yellow Edge */}
                    <div className="absolute right-0 top-0 h-full w-px bg-yellow-400/30" />
                </motion.div>

                {/* ================= RIGHT PANEL ================= */}
                <motion.div
                    className="absolute inset-y-0 right-0 z-20 w-1/2 bg-[#080808]"
                    initial={{ x: 0 }}
                    animate={{
                        x: startExit ? "100%" : "0%",
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                >
                    {/* Yellow Edge */}
                    <div className="absolute left-0 top-0 h-full w-px bg-yellow-400/30" />
                </motion.div>

                {/* ================= BACKGROUND GLOW ================= */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

                {/* ================= CORNER TEXT ================= */}
                <motion.div
                    className="absolute bottom-6 left-6 z-40 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    Est. Fitness • Buxar
                </motion.div>

                <motion.div
                    className="absolute bottom-6 right-6 z-40 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    Strength • Discipline
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

