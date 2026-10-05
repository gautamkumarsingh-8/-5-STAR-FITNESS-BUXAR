
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlDHpKFggxq0P3JTNMvKNqYfJ82rKFzpRDUtSQScIhFeEBttZg_7fwoK9cR3mQuQjeDOVOlPzqdZTBHJ1WJ-sIgjzWTSF2stPRZnshBLcsjt8N7fj_cQVdpBB30xdlzkhlGL9tlWQ=s1360-w1360-h1020-rw",
        title: "Strength Training",
        category: "Workout",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmyTnz_8f375cioRVlQL0mxAu35Q8A6c2anfk_F1c_SQJyS-jhcel99NQ2KqotfyqbNUODbafASjGvAFzMgJPJy0VSR2gPcY2PiDpGQVGrsHcYyE9NIpnhu_-Cwvtfo8Y0Gyis=s1360-w1360-h1020-rw",
        title: "Modern Gym",
        category: "Gym Interior",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlY-po801VN8XUiuSmitJxg3TtIC659P86PoBA2hu_4p-o4aA4fOigjrV8F-CwZ2w50G0cvsVv3qWuc8VFXPfLWscJaIeTZ7KMHPo8_-ZKMH5qVYw4q7HZHbC67vaWer2V5QryU=s1360-w1360-h1020-rw",
        title: "Power Workout",
        category: "Strength",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmv4RHm3esJcufLmXe7Dz0Me9UbDNXC2h7nM-4KHbBm4ARAQroVzWqGsRh5yMmhDXKlRlghCpID_uUt_tD0XGdU3Cr5mUKwtnoANWUO-tvlbvXLLBPnETM5BaSXwwiZf35ZeZwV=s1360-w1360-h1020-rw",
        title: "Heavy Training",
        category: "Fitness",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzzTHD_ZlyyhV0c7dLnpIWqUd5OO_xFFAmXxFT5y_94jkyMqMv3Wt8DgG9fe3aL49J-3T2lgVzoPCxMpk1LKyA6LzymVlzAsqt6sSnLjI7CJ6kFEib4d6DCMJMbuAZ3kbEYG4=s1360-w1360-h1020-rw",
        title: "Training Zone",
        category: "Workout",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlwMH-q2OlJrjHOJT_Kr1qDk-uFRsmi6a_YTKrW5z3PP8165c-SH4R-VOPwwT_z7DnnLx8SZ3_V_TjzsoCU64WXBlYhENTNC4N3KR-O5Mt5x6GYjawlOD5npa7riNTVHc0GrZoF=s1360-w1360-h1020-rw",
        title: "Premium Equipment",
        category: "Equipment",
    },
];

export default function Gallery() {
    const [activeImage, setActiveImage] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-[#080808] py-8"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Header */}
                <motion.div
                    initial={{
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                        Our Gallery
                    </span>

                    <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Train Hard.
                        <span className="block text-yellow-400">
                            Look Strong.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                        Explore our gym, equipment, training sessions and the energy
                        that makes every workout count.
                    </p>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <GalleryCard
                            key={`${image.title}-${index}`}
                            image={image}
                            index={index}
                            shouldReduceMotion={shouldReduceMotion}
                            onClick={() => setActiveImage(image)}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 1, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="mb-4 text-sm text-white/45">
                        Ready to start your transformation?
                    </p>

                    <a
                        href="#membership"
                        className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                    >
                        Join The Gym
                        <span>→</span>
                    </a>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveImage(null)}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveImage(null)}
                                aria-label="Close image"
                                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-black"
                            >
                                ✕
                            </button>

                            <div className="aspect-video w-full bg-[#111]">
                                <img
                                    src={activeImage.src}
                                    alt={activeImage.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="border-t border-white/10 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                                    {activeImage.category}
                                </p>

                                <h3 className="mt-1 text-xl font-black text-white">
                                    {activeImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}


/* ================= GALLERY CARD ================= */

function GalleryCard({
    image,
    index,
    shouldReduceMotion,
    onClick,
}) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            initial={{
                opacity: 1,
                y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.1,
            }}
            transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.06,
            }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111] text-left"
        >
            {/* Image */}
            <motion.div
                className="absolute inset-0"
                whileHover={
                    shouldReduceMotion
                        ? {}
                        : {
                              scale: 1.07,
                          }
                }
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <img
                    src={image.src}
                    alt={image.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 3 ? "high" : "auto"}
                    draggable={false}
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Hover Dark Layer */}
            <div className="absolute inset-0 bg-yellow-400/0 transition-all duration-500 group-hover:bg-yellow-400/5" />

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-yellow-400/70 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
                    {image.category}
                </span>

                <h3 className="mt-1 text-sm font-black uppercase text-white sm:text-lg">
                    {image.title}
                </h3>

                <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white backdrop-blur transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                    ↗
                </div>
            </div>

            {/* Shine */}
            <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
        </motion.button>
    );
}
