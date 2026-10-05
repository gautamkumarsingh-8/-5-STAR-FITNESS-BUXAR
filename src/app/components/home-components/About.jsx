
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ABOUT_IMAGE =
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmg3t2Czlm-_qzUo6xSJ_ahCQvPwIPg3RVMSFOagt7RquOKsCPBmwmuixsjHqTPnI-9tQ43SRtDrHdGj3agXw9JUozWoGOAYb0_DBQ5TCBO5mdxxxonPDPeu5FWEdhyDvj1wbMz=s1360-w1360-h1020-rw";

const stats = [
    {
        value: "5+",
        label: "Years Experience",
    },
    {
        value: "500+",
        label: "Active Members",
    },
    {
        value: "20+",
        label: "Training Programs",
    },
    {
        value: "7 Days",
        label: "Open Every Week",
    },
];

const features = [
    {
        number: "01",
        title: "Modern Equipment",
        text: "Train with quality equipment designed for strength, cardio and complete fitness.",
    },
    {
        number: "02",
        title: "Expert Guidance",
        text: "Get proper support and practical guidance to improve your training safely.",
    },
    {
        number: "03",
        title: "Motivating Environment",
        text: "A powerful workout environment that keeps you focused and consistent.",
    },
];

export default function About() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-24"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-yellow-500/5 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* ================= TOP HEADING ================= */}
                <motion.div
                    initial={{
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                        About 5 Star Fitness
                    </span>

                    <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                        More Than
                        <span className="block text-yellow-400">
                            Just A Gym.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                        We believe fitness is not only about lifting weights.
                        It is about building discipline, confidence and a
                        stronger version of yourself.
                    </p>
                </motion.div>

                {/* ================= MAIN ABOUT ================= */}
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    {/* ================= IMAGE SIDE ================= */}
                    <motion.div
                        initial={{
                            opacity: shouldReduceMotion ? 1 : 0,
                            x: shouldReduceMotion ? 0 : -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl">

                            {/* Dark Overlay */}
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <img
                                src={ABOUT_IMAGE}
                                alt="5 Star Fitness gym"
                                loading="lazy"
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[540px] lg:h-[580px]"
                            />

                            {/* Yellow Inner Border */}
                            <div className="pointer-events-none absolute inset-4 z-20 rounded-[1.5rem] border border-yellow-400/25" />

                            {/* Image Label */}
                            <div className="absolute bottom-6 left-6 z-30">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                                    5 Star Fitness Buxar
                                </p>

                                <h3 className="mt-1 text-2xl font-black uppercase text-white sm:text-3xl">
                                    Train With Purpose.
                                </h3>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{
                                opacity: shouldReduceMotion ? 1 : 0,
                                scale: shouldReduceMotion ? 1 : 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="absolute -bottom-7 -right-2 z-40 sm:-right-6"
                        >
                            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-[#080808] bg-yellow-400 text-center shadow-[0_0_40px_rgba(250,204,21,0.2)] sm:h-36 sm:w-36">

                                <span className="text-3xl font-black leading-none text-black sm:text-4xl">
                                    5
                                </span>

                                <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                                    Star
                                </span>

                                <span className="mt-1 text-[8px] font-bold uppercase tracking-widest text-black/70 sm:text-[9px]">
                                    Fitness Buxar
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ================= CONTENT SIDE ================= */}
                    <motion.div
                        initial={{
                            opacity: shouldReduceMotion ? 1 : 0,
                            x: shouldReduceMotion ? 0 : 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                            Who We Are
                        </span>

                        <h3 className="mt-4 max-w-xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                            Build Strength.
                            <span className="block text-yellow-400">
                                Build Confidence.
                            </span>
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
                            At 5 Star Fitness, our goal is simple — create a
                            place where people can train hard, stay consistent
                            and become stronger every day.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                            Whether you are starting your fitness journey,
                            improving strength or working toward a specific
                            goal, our gym provides the environment and
                            equipment you need to keep moving forward.
                        </p>

                        {/* ================= FEATURES ================= */}
                        <div className="mt-8 space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.number}
                                    initial={{
                                        opacity: shouldReduceMotion ? 1 : 0,
                                        y: shouldReduceMotion ? 0 : 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: shouldReduceMotion
                                            ? 0
                                            : index * 0.12,
                                    }}
                                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03]"
                                >
                                    {/* Number */}
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-xs font-black text-yellow-400">
                                        {feature.number}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h4 className="text-sm font-black uppercase text-white sm:text-base">
                                            {feature.title}
                                        </h4>

                                        <p className="mt-1 text-xs leading-6 text-white/45 sm:text-sm">
                                            {feature.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* ================= CTA ================= */}
                        <div className="mt-8 flex flex-wrap gap-3">

                            <Link
                                href="#membership"
                                className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                            >
                                Join The Gym

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="#gallery"
                                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.06]"
                            >
                                View Gallery
                            </Link>

                        </div>
                    </motion.div>
                </div>

                {/* ================= STATS ================= */}
                <motion.div
                    initial={{
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:grid-cols-4"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`relative p-6 text-center sm:p-8 ${
                                index < 2
                                    ? "border-b border-white/10"
                                    : ""
                            } ${
                                index % 2 === 0
                                    ? "border-r border-white/10 lg:border-r-0"
                                    : ""
                            } ${
                                index !== stats.length - 1
                                    ? "lg:border-r lg:border-white/10"
                                    : ""
                            } ${
                                index >= 2
                                    ? "lg:border-b-0"
                                    : ""
                            }`}
                        >
                            <div className="text-3xl font-black text-yellow-400 sm:text-4xl">
                                {stat.value}
                            </div>

                            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

