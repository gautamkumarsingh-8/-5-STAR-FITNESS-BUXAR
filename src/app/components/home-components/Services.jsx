
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const IMAGES = {
  strength:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIoqknMyypuQFa_rO4fEVL4tJCOhrkz51Cy9UDDV26So-8VeOwQKoZVU&s=10",

  trainer:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfnyL3xLhR79O90j0IyiJfY-Xowp_dE4gX1NGLWcR1GX9kQ6PtM-l3HwT&s=10",

  personalTraining:
    "https://jfitpersonaltraining.com/blog/blog-img/Personal-Trainer-training.jpg",

  cardio:
    "https://hips.hearstapps.com/hmg-prod/images/muscular-man-doing-pushup-exercise-with-dumbbell-royalty-free-image-1728661212.jpg?crop=0.668xw:1.00xh;0.00680xw,0&resize=640:*",

  gymInterior:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9SQOYqxJ8nDZhIX9aI_D4Ys7QqgroT2_lZ44HTjVwQ&s=10",

  community:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOPxekDxO7Nmk5EbeVBVV8QIcSPXuzrdXJvRlfdMuFFZPwPbKOpd04UE&s=10",
};

const SERVICES = [
  {
    number: "01",
    title: "Strength Training",
    short: "BUILD POWER",
    description:
      "Build strength, muscle and overall performance with focused strength workouts.",
    image: IMAGES.strength,
    icon: "⚡",
  },
  {
    number: "02",
    title: "Expert Training",
    short: "TRAIN SMART",
    description:
      "Get proper guidance and support from experienced fitness trainers.",
    image: IMAGES.trainer,
    icon: "🏆",
  },
  {
    number: "03",
    title: "Personal Training",
    short: "1 ON 1",
    description:
      "Follow focused workouts designed around your personal fitness goals.",
    image: IMAGES.personalTraining,
    icon: "🎯",
  },
  {
    number: "04",
    title: "Cardio Training",
    short: "BOOST FITNESS",
    description:
      "Improve stamina, endurance and cardiovascular fitness with effective workouts.",
    image: IMAGES.cardio,
    icon: "🔥",
  },
  {
    number: "05",
    title: "Fitness Programs",
    short: "GET FIT",
    description:
      "Improve strength, mobility, endurance and overall fitness with balanced training.",
    image: IMAGES.gymInterior,
    icon: "💪",
  },
  {
    number: "06",
    title: "Community Fitness",
    short: "STAY MOTIVATED",
    description:
      "Train in a positive environment surrounded by people working toward their goals.",
    image: IMAGES.community,
    icon: "🤝",
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <main
      id="services"
      className="min-h-screen scroll-mt-[78px] bg-[#050505] text-white  "
    >
      {/* =====================================================
          SERVICES INTRO
      ====================================================== */}
      <section className="relative overflow-hidden px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/[0.07] blur-[130px]" />

        {/* Side glow */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
              </span>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Train Hard.
              <span className="block bg-gradient-to-r from-[#FACC15] via-yellow-400 to-[#F97316] bg-clip-text text-transparent">
                Get Strong.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Professional fitness services designed to help you build
              strength, improve fitness and achieve your goals at
              <span className="font-semibold text-white/70">
                {" "}
                5 Star Fitness, Buxar.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES CARDS
      ====================================================== */}
      <section className="relative px-4 pb-12 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-1.5 text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
                What We Offer
              </p>

              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                Our Fitness Services
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Everything you need to train better, stay consistent and become
              stronger.
            </p>
          </motion.div>

          {/* =====================================================
              CARDS GRID
          ====================================================== */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <motion.article
                key={service.number}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                className="group relative h-[390px] overflow-hidden rounded-[24px] border border-white/10 bg-[#101010] shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
              >
                {/* =====================================================
                    IMAGE
                ====================================================== */}
                <img
                  src={service.image}
                  alt={`${service.title} at 5 Star Fitness`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* =====================================================
                    DARK OVERLAY
                ====================================================== */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

                {/* Gold Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Shine */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* =====================================================
                    NUMBER
                ====================================================== */}
                <div className="absolute right-5 top-5 z-10">
                  <span className="text-sm font-black tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-yellow-400">
                    {service.number}
                  </span>
                </div>

                {/* =====================================================
                    ICON
                ====================================================== */}
                <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/30 bg-black/50 text-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 group-hover:bg-yellow-400">
                  <span className="transition-all duration-300 group-hover:grayscale">
                    {service.icon}
                  </span>
                </div>

                {/* =====================================================
                    SHORT LABEL
                ====================================================== */}
                <div className="absolute left-[66px] top-5 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                    {service.short}
                  </span>
                </div>

                {/* =====================================================
                    CONTENT
                ====================================================== */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-5">
                  {/* Gold line */}
                  <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-20" />

                  {/* Title */}
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[340px] text-sm leading-5.5 text-white/60 transition-colors duration-300 group-hover:text-white/80">
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                      5 Star Fitness
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                      →
                    </span>
                  </div>
                </div>

                {/* =====================================================
                    BOTTOM ANIMATED LINE
                ====================================================== */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-700 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[26px] border border-yellow-400/10 bg-gradient-to-r from-yellow-400/[0.08] to-orange-500/[0.04] px-6 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.3)] sm:px-9"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-yellow-400/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            {/* CTA Text */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Start Your Journey
              </p>

              <h2 className="mt-1.5 text-2xl font-black uppercase sm:text-3xl">
                Ready To Get Stronger?
              </h2>

              <p className="mt-1 text-sm text-white/40">
                Join 5 Star Fitness and make every workout count.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              {/* Join */}
              <Link
                href="#membership"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FACC15] to-[#F97316] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                Join Now

                <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999?text=Hello%205%20Star%20Fitness%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.08]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

