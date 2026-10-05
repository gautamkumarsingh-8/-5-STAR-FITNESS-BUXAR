"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, y: 30, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.7 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                        scale: 1.08,
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.92,
                    }}
                    className="
                        fixed
                        bottom-6
                        right-6
                        z-[999]
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-yellow-400/40
                        bg-yellow-400
                        text-black
                        shadow-[0_8px_30px_rgba(250,204,21,0.25)]
                        transition-shadow
                        hover:shadow-[0_10px_40px_rgba(250,204,21,0.4)]
                        sm:bottom-8
                        sm:right-8
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}