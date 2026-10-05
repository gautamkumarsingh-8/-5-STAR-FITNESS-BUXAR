"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const PHONE = "91+9386970508";

const membershipPlans = [
  {
    id: "monthly",
    duration: "1 Month",
    price: 500,
    oldPrice: null,
    saving: null,
    badge: "Flexible",
    description: "Perfect for getting started with your fitness journey.",
    popular: false,
    features: [
      "Full Gym Access",
      "Modern Equipment",
      "Cardio Area Access",
      "General Workout Guidance",
      "Locker Facility",
    ],
  },
  {
    id: "six-month",
    duration: "6 Months",
    price: 2700,
    oldPrice: 3000,
    saving: "Save ₹300",
    badge: "Popular",
    description:
      "Train consistently for 6 months and save more on your membership.",
    popular: true,
    features: [
      "Everything in 1 Month",
      "6 Months Full Gym Access",
      "Strength & Cardio Equipment",
      "Workout Guidance",
      "Priority Support",
      "Better Long-Term Value",
    ],
  },
  {
    id: "yearly",
    duration: "1 Year",
    price: 4800,
    oldPrice: 6000,
    saving: "Save ₹1,200",
    badge: "Best Value",
    description:
      "The best plan for serious members who want maximum value and consistency.",
    popular: false,
    features: [
      "Everything in 6 Months",
      "12 Months Full Gym Access",
      "Complete Workout Area Access",
      "Personal Guidance",
      "Priority Support",
      "Maximum Savings",
    ],
  },
];

function getWhatsAppLink(plan) {
  const message = encodeURIComponent(
    `Hello 5 Star Fitness, I want to join the ${plan.duration} membership for ₹${plan.price}. Please share the joining details.`
  );

  return `https://wa.me/${91+9386970508}?text=${message}`;
}

export default function Membership() {
  const reduce = useReducedMotion();

  return (
    <main
      id="membership"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/[0.07] blur-[140px]" />

        <div className="absolute -left-32 top-[35%] h-80 w-80 rounded-full bg-orange-500/[0.04] blur-[120px]" />

        <div className="absolute -right-32 bottom-[10%] h-80 w-80 rounded-full bg-yellow-500/[0.04] blur-[120px]" />
      </div>

      {/* =====================================================
          HERO / INTRO
      ====================================================== */}
      <section className="relative px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
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
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
              </span>

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-400 sm:text-xs">
                Membership Plans
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Choose Your
              <span className="block bg-gradient-to-r from-[#FACC15] via-yellow-400 to-[#F97316] bg-clip-text text-transparent">
                Fitness Plan.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Simple pricing, flexible plans and better savings. Choose the
              membership that fits your fitness goals at{" "}
              <span className="font-semibold text-white/75">
                5 Star Fitness, Buxar.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MEMBERSHIP CARDS
      ====================================================== */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
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
                  delay: reduce ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -10,
                      }
                }
                className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] border p-6 transition-all duration-500 sm:p-7 ${
                  plan.popular
                    ? "border-yellow-400/60 bg-gradient-to-b from-yellow-400/[0.10] via-[#111111] to-[#0d0d0d] shadow-[0_0_60px_rgba(250,204,21,0.10)]"
                    : "border-white/10 bg-[#0e0e0e] hover:border-yellow-400/30"
                }`}
              >
                {/* Popular glow */}
                {plan.popular && (
                  <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-yellow-400/10 blur-[80px]" />
                )}

                {/* Top animated line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-[3px] ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"
                      : "bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
                  }`}
                />

                {/* Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] ${
                      plan.popular
                        ? "bg-yellow-400 text-black"
                        : "border border-white/10 bg-white/[0.04] text-white/50"
                    }`}
                  >
                    {plan.badge}
                  </span>

                  {plan.saving && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-green-400">
                      {plan.saving}
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="relative z-10 mt-7">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
                    Membership
                  </p>

                  <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                    {plan.duration}
                  </h2>
                </div>

                {/* Price */}
                <div className="relative z-10 mt-7">
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-black tracking-tight text-white">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>

                    {plan.oldPrice && (
                      <span className="pb-1 text-sm font-bold text-white/25 line-through">
                        ₹{plan.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                    {plan.id === "monthly"
                      ? "per month"
                      : `for ${plan.duration.toLowerCase()}`}
                  </p>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-6 min-h-[48px] text-sm leading-6 text-white/50">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Features */}
                <div className="relative z-10 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-[10px] font-black text-yellow-400">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={getWhatsAppLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/button relative z-10 mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-xs font-black uppercase tracking-[0.12em] transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-400 text-black hover:scale-[1.02] hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]"
                      : "border border-white/10 bg-white/[0.04] text-white hover:border-yellow-400/40 hover:bg-yellow-400 hover:text-black"
                  }`}
                >
                  Join This Plan

                  <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>

                {/* Bottom animated line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 ${
                    plan.popular
                      ? "w-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "w-0 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SAVINGS STRIP
      ====================================================== */}
      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-7xl rounded-[26px] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
                Long-Term Savings
              </p>

              <h3 className="mt-2 text-xl font-black uppercase sm:text-2xl">
                Train More. Save More.
              </h3>

              <p className="mt-1 text-sm text-white/40">
                Choose a longer membership and keep more money in your pocket.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.05] px-5 py-3 text-center">
                <p className="text-2xl font-black text-yellow-400">10%</p>
                <p className="text-[9px] font-black uppercase tracking-wider text-white/35">
                  6 Months
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.07] px-5 py-3 text-center">
                <p className="text-2xl font-black text-yellow-400">20%</p>
                <p className="text-[9px] font-black uppercase tracking-wider text-white/35">
                  1 Year
                </p>
              </div>
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-yellow-400/15 bg-gradient-to-r from-yellow-400/[0.08] via-white/[0.02] to-orange-500/[0.05] px-6 py-10 text-center sm:px-10"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[100px]" />

          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
              Your Journey Starts Here
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-4xl">
              Stop Waiting.
              <span className="block text-yellow-400">
                Start Training.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">
              Pick your membership plan and take the first step toward a
              stronger, healthier and more confident you.
            </p>

            <a
              href={getWhatsAppLink(membershipPlans[2])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]"
            >
              Start Your Membership
              <span className="text-base">→</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
