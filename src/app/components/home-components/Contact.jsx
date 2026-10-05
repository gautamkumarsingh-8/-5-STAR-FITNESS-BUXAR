"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const PHONE = "+919386970508";
const EMAIL = "hello@5starfitness.com";

const socialLinks = [
  {
    name: "Instagram",
    short: "IG",
    href: "#",
  },
  {
    name: "Facebook",
    short: "FB",
    href: "#",
  },
  {
    name: "WhatsApp",
    short: "WA",
    href: `https://wa.me/${PHONE.replace("+91", "9386970508")}`,
  },
];

const sponsors = [
  {
    name: "FITPRO",
    text: "Fitness Partner",
  },
  {
    name: "POWERX",
    text: "Equipment Partner",
  },
  {
    name: "NUTRILIFE",
    text: "Nutrition Partner",
  },
];

export default function Contact() {
  const reduce = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello 5 Star Fitness,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`
    );

    window.open(
      `https://wa.me/${PHONE.replace("+91", "9386970508")}?text=${text}`,
      "_blank"
    );
  }

  return (
    <main
      id="contact"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.06] blur-[150px]" />

        <div className="absolute -left-32 top-[40%] h-80 w-80 rounded-full bg-orange-500/[0.035] blur-[120px]" />

        <div className="absolute -right-32 bottom-[20%] h-80 w-80 rounded-full bg-yellow-500/[0.035] blur-[120px]" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo */}
            <div className="mx-auto mb-5 flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-xl text-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.08)]">
                ★
              </div>

              <div className="text-left">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  5 Star Fitness
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-yellow-400/70">
                  Buxar
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.05] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-xs">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s Talk.
              <span className="block bg-gradient-to-r from-[#FACC15] via-yellow-400 to-[#F97316] bg-clip-text text-transparent">
                Let&apos;s Get Stronger.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Have a question about membership, training or the gym? Send us a
              message and our team will get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="relative px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <motion.div
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: -40,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75 }}
              className="flex flex-col"
            >
              {/* Contact Info Card */}
              <div className="rounded-[28px] border border-white/10 bg-[#0d0d0d] p-6 sm:p-7">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                    Contact Information
                  </p>

                  <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                    We&apos;re Here To Help.
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                    Visit us, call us or send a message. We&apos;re always
                    ready to help you start your fitness journey.
                  </p>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${PHONE}`}
                  className="group mt-7 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-400">
                    ☎
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-bold text-white transition-colors group-hover:text-yellow-400">
                      {PHONE}
                    </p>
                  </div>

                  <span className="ml-auto text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                    →
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-400">
                    ✉
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      Email Us
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-white transition-colors group-hover:text-yellow-400">
                      {EMAIL}
                    </p>
                  </div>

                  <span className="ml-auto text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                    →
                  </span>
                </a>

                {/* Location */}
                <div className="mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-400">
                    📍
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      5 Star Fitness by - Maya Gym
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Buxar, Bihar, India
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                    Follow Us
                  </p>

                  <div className="mt-3 flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target={
                          social.name === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          social.name === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[10px] font-black text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400 hover:text-black"
                      >
                        {social.short}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sponsors */}
              <div className="mt-4 rounded-[28px] border border-white/10 bg-[#0d0d0d] p-6 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                      Our Partners
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase">
                      Trusted Sponsors
                    </h3>
                  </div>

                  <span className="text-lg text-yellow-400">✦</span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={
                        reduce
                          ? false
                          : {
                              opacity: 0,
                              y: 15,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={
                        reduce
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center transition-all duration-300 hover:border-yellow-400/25"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/15 bg-yellow-400/[0.05] text-xs font-black text-yellow-400">
                        ★
                      </div>

                      <p className="mt-2 text-[10px] font-black uppercase text-white/70">
                        {sponsor.name}
                      </p>

                      <p className="mt-1 text-[8px] uppercase tracking-wider text-white/25">
                        {sponsor.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT SIDE - FORM
            ================================================== */}
            <motion.div
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: 40,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >
              <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 lg:p-9">
                {/* Form Glow */}
                <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-yellow-400/[0.06] blur-[100px]" />

                {/* Top line */}
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                    Send A Message
                  </p>

                  <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                    Contact Our Team
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
                    Fill out the form below and we&apos;ll receive your enquiry
                    directly on WhatsApp.
                  </p>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/[0.06] p-4"
                    >
                      <p className="text-sm font-bold text-green-400">
                        ✓ Message prepared successfully.
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        WhatsApp has been opened with your enquiry.
                      </p>
                    </motion.div>
                  )}

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-4"
                  >
                    {/* Name + Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
                        Your Message
                      </label>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                        className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-yellow-400/50 focus:bg-yellow-400/[0.02] focus:ring-2 focus:ring-yellow-400/10"
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FACC15] to-[#F97316] px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(250,204,21,0.2)]"
                    >
                      Send Enquiry

                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="text-center text-[10px] uppercase tracking-wider text-white/20">
                      Your enquiry will open directly in WhatsApp
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE MAP
      ====================================================== */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-7xl"
        >
          {/* Map Heading */}
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                Find Us
              </p>

              <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
                Visit 5 Star Fitness
              </h2>
            </div>

            <p className="text-sm text-white/35">
              Come in. Train hard. Get stronger.
            </p>
          </div>

          {/* Map */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            {/* Yellow glow border */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-yellow-400/30" />

            <div className="overflow-hidden rounded-[22px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28796.00848263117!2d83.93148807431639!3d25.55499159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399275e1c61e8d8b%3A0xe168a4b94375386b!2s5%20Star%20Fitness%20by%20-%20Maya%20gym!5e0!3m2!1sen!2sin!4v1791184954596!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{
                  border: 0,
                  display: "block",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="5 Star Fitness by Maya Gym location"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  scale: 0.98,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-yellow-400/15 bg-gradient-to-r from-yellow-400/[0.08] via-white/[0.02] to-orange-500/[0.05] px-6 py-10 text-center sm:px-10"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[100px]" />

          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
              5 Star Fitness
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-4xl">
              Your Stronger
              <span className="block text-yellow-400">
                Journey Starts Here.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">
              Have questions about membership or training? Contact us today.
            </p>

            <a
              href={`https://wa.me/${PHONE.replace(
                "+",
                ""
              )}?text=Hello%205%20Star%20Fitness%2C%20I%20want%20to%20know%20more%20about%20your%20gym.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]"
            >
              Chat On WhatsApp
              <span className="text-base">→</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-yellow-400/50 focus:bg-yellow-400/[0.02] focus:ring-2 focus:ring-yellow-400/10"
      />
    </div>
  );
}

