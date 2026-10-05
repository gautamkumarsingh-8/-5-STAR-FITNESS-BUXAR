"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PHONE = "+919386970508";
const whatsappMessage = encodeURIComponent("Hello 5 Star Fitness, I want to know more about your gym membership.");
const whatsappLink = `https://wa.me/${PHONE.replace("91+", "919386970508")}?text=${whatsappMessage}`;

// Images ko /public/images mein rakho
const SLIDES = [
  "/gym-hero.jpg",
  "/gym-2.png",
  "/gym-3.jpg",
];
const EASE = [0.22, 1, 0.36, 1];

const StarIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2l2.9 6.26 6.6.57-5 4.4 1.5 6.47L12 16.9 5.99 19.7l1.5-6.47-5-4.4 6.6-.57L12 2z" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
    <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.2-1.1-.2-2.4-.9-3.6-2.1-1.2-1.2-1.9-2.5-2.1-3.6-.1-.5 0-1.1.2-1.5Z" />
  </svg>
);

function CountUp({ to, suffix = "", reduce }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 2, ease: EASE, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (d) => setCur((p) => (p + d + SLIDES.length) % SLIDES.length);

  // Auto slide: har 4 second
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setCur((p) => (p + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, [paused, reduce]);

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  const btn =
    "inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-black uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto";

  return (
    <section
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ minHeight: "clamp(680px, 90vh, 900px)" }}
      className="relative flex items-center overflow-hidden bg-[#050505] text-white"
    >
      {/* FULL BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={cur}
            src={SLIDES[cur]}
            alt="5 Star Fitness Gym Buxar"
            initial={{ opacity: 0, scale: 1.12, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 5.5, ease: "linear" },
              x: { duration: 1.4, ease: "easeOut" },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* CONTENT: seedha image ke upar */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="w-full max-w-[720px] md:max-w-[600px] lg:max-w-[700px]">
          <motion.div {...rise(0)} className="mb-4 inline-flex items-center gap-3 rounded-full border border-yellow-400/25 bg-black/40 px-4 py-2 backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-black"><StarIcon /></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">5 Star Fitness • Buxar</span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          </motion.div>

          <motion.p {...rise(0.1)} className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#FACC15] sm:text-base">
            Premium Fitness Club
          </motion.p>

          <motion.h1
            {...rise(0.2)}
            className="text-[clamp(3rem,13vw,4.5rem)] font-black uppercase leading-[0.92] tracking-tight sm:text-[clamp(3.5rem,7vw,7rem)]"
          >
            Train
            <span className="block bg-gradient-to-r from-[#FACC15] to-[#F97316] bg-clip-text text-transparent">Hard.</span>
            <span className="block">Stay <span className="text-[#EF4444]">Strong.</span></span>
          </motion.h1>

          <motion.p {...rise(0.4)} className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Build strength, confidence and consistency at{" "}
            <span className="font-bold text-white">5 Star Fitness</span>. Your premium fitness destination for
            training, transformation and a stronger lifestyle in Buxar.
          </motion.p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.div {...rise(0.55)} className="sm:w-auto">
              <Link
                href="#membership"
                className={`${btn} group bg-gradient-to-r from-[#FACC15] to-[#F97316] text-black shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] focus-visible:outline-yellow-300`}
              >
                <span>Join Now</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
            </motion.div>

            <motion.div {...rise(0.65)}>
              <a
                href={`tel:${PHONE}`}
                className={`${btn} border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus-visible:outline-yellow-300`}
              >
                <PhoneIcon /><span>Call Now</span>
              </a>
            </motion.div>

            <motion.div {...rise(0.75)}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn} border border-[#25D366]/50 bg-[#25D366]/15 text-[#25D366] backdrop-blur-md hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_35px_rgba(37,211,102,0.3)] focus-visible:outline-[#25D366]`}
              >
                <WhatsAppIcon /><span>WhatsApp Us</span>
              </a>
            </motion.div>
          </div>

          {/* STATS: mobile par bhi 3 columns */}
          <div className="mt-8 grid max-w-md grid-cols-3 divide-x divide-white/10">
            {[
              { to: 500, suffix: "+", label: "Members" },
              { to: 5, suffix: "★", label: "Experience" },
              { to: 100, suffix: "%", label: "Commitment" },
            ].map((s, k) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.9 + k * 0.12, ease: EASE }}
                className="px-3 first:pl-0 sm:px-5"
              >
                <p className="text-xl font-black text-[#FACC15] sm:text-3xl">
                  <CountUp to={s.to} suffix={s.suffix} reduce={reduce} />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/50 sm:text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING BADGE: sirf bade screen par, halka float */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-8 z-20 hidden items-center gap-4 rounded-2xl border border-yellow-400/20 bg-black/60 px-5 py-4 backdrop-blur-md lg:flex xl:right-16"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FACC15] text-black"><StarIcon className="h-6 w-6" /></span>
        <div>
          <p className="text-lg font-black leading-none text-[#FACC15]">5 STAR</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/60">Buxar, Bihar</p>
        </div>
      </motion.div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
        <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline focus-visible:outline-yellow-300">
          <span className="rotate-180"><ArrowIcon /></span>
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCur(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === cur}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === cur ? "w-8 bg-[#FACC15]" : "w-3 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline focus-visible:outline-yellow-300">
          <ArrowIcon />
        </button>
      </div>

      {/* Upar ki gold line */}
      <div className="absolute left-0 top-0 z-30 h-[2px] w-full bg-gradient-to-r from-transparent via-[#FACC15] to-transparent" />
    </section>
  );
}