"use client";

import Link from "next/link";

const PHONE = "+919386970508"; // Replace with real gym number

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

/* =========================
   INSTAGRAM ICON
========================= */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD600" />
        <stop offset="35%" stopColor="#FF7A00" />
        <stop offset="65%" stopColor="#FF0069" />
        <stop offset="100%" stopColor="#D300C5" />
      </linearGradient>
    </defs>

    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="url(#instagramGradient)"
      strokeWidth="2"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="url(#instagramGradient)"
      strokeWidth="2"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="#FF0069"
    />
  </svg>
);

/* =========================
   FACEBOOK ICON
========================= */
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
  </svg>
);

/* =========================
   WHATSAPP ICON
========================= */
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />

    <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.2-1.1-.2-2.4-.9-3.6-2.1-1.2-1.2-1.9-2.5-2.1-3.6-.1-.5 0-1.1.2-1.5Z" />
  </svg>
);

/* =========================
   PHONE ICON
========================= */
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* =========================
   ARROW ICON
========================= */
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello 5 Star Fitness, I want to know more about your gym membership."
  );

  const whatsappLink = `https://wa.me/${PHONE.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#050505] text-white">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-600/10 blur-[130px]"
      />

      {/* Animated Gold Line */}
      <div className="relative h-[2px] w-full overflow-hidden bg-yellow-500/10">
        <div className="footer-gold-line absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">

        {/* =========================
            CTA AREA
        ========================= */}
        <div className="group relative mb-16 overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-[#0b0b0b] to-red-600/10 p-6 sm:p-8 lg:p-10">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              boxShadow: "inset 0 0 60px rgba(234,179,8,0.08)",
            }}
          />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
                Start Your Transformation
              </p>

              <h2 className="text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
                Ready To Become
                <span className="ml-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Stronger?
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                Join 5 Star Fitness and take the first step toward a stronger,
                healthier and more confident version of yourself.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              {/* CALL BUTTON */}
              <a
                href={`tel:${PHONE}`}
                className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-600/50 active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover/btn:rotate-12">
                  <PhoneIcon />
                </span>

                Call Now
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.45)] active:scale-95"
              >
                {/* Shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

                <span className="relative z-10 flex items-center gap-2">
                  <span className="transition-transform duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-6">
                    <WhatsAppIcon />
                  </span>

                  WhatsApp Us
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* =========================
            MAIN FOOTER
        ========================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 shadow-[0_0_25px_rgba(245,179,1,0.25)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">

                <span className="absolute inset-0 animate-pulse rounded-xl bg-yellow-400/20 blur-md" />

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative z-10 h-7 w-7 text-black"
                >
                  <path d="M12 2l2.9 6.26 6.6.57-5 4.4 1.5 6.47L12 16.9 5.99 19.7l1.5-6.47-5-4.4 6.6-.57L12 2z" />
                </svg>
              </span>

              <span>
                <span className="block text-lg font-black tracking-wide">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                    5 STAR FITNESS
                  </span>
                </span>

                <span className="text-[9px] font-bold tracking-[0.22em] text-white/40">
                  GENTS & LADIES • BUXAR
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Premium fitness experience in Buxar. Train harder, stay
              consistent and become the strongest version of yourself.
            </p>

            {/* =========================
                SOCIAL ICONS
            ========================= */}
            <div className="mt-6 flex items-center gap-3">

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(225,48,108,0.35)]"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-pink-500/10 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover/social:opacity-100" />

                <span className="relative z-10 transition-transform duration-300 group-hover/social:scale-125 group-hover/social:rotate-6">
                  <InstagramIcon />
                </span>
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/10 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2]/60 hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_25px_rgba(24,119,242,0.4)]"
              >
                <span className="absolute inset-0 bg-[#1877F2] opacity-0 transition-opacity duration-300 group-hover/social:opacity-100" />

                <span className="relative z-10 transition-transform duration-300 group-hover/social:scale-125">
                  <FacebookIcon />
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group/social relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_25px_rgba(37,211,102,0.45)]"
              >
                <span className="absolute inset-0 bg-[#25D366] opacity-0 transition-opacity duration-300 group-hover/social:opacity-100" />

                <span className="relative z-10 transition-transform duration-300 group-hover/social:scale-125 group-hover/social:rotate-6">
                  <WhatsAppIcon />
                </span>
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                  >
                    <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm text-white/55">
              <li className="transition-colors hover:text-white">
                Strength Training
              </li>

              <li className="transition-colors hover:text-white">
                Weight Training
              </li>

              <li className="transition-colors hover:text-white">
                Cardio Training
              </li>

              <li className="transition-colors hover:text-white">
                Personal Training
              </li>

              <li className="transition-colors hover:text-white">
                Fitness Programs
              </li>

              <li className="transition-colors hover:text-white">
                Diet & Fitness Guidance
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* PHONE */}
              <a
                href={`tel:${PHONE}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10 text-red-400 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(220,38,38,0.35)]">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/35">
                    Call Us
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white/80 group-hover:text-yellow-400">
                    +91 9386970508
                  </span>
                </span>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                  📍
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/35">
                    Location
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-white/70">

                    Naya Bazar Buxar, Bihar
                  </span>
                </span>
              </div>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-yellow-400 transition-all duration-300 hover:gap-3"
              >
                Get Directions
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

        {/* =========================
            BOTTOM
        ========================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} 5 Star Fitness. All Rights Reserved.
          </p>

          <p className="text-xs text-white/35">
            Designed & Developed with{" "}
            <span className="mx-1 text-red-500">♥</span>
            by{" "}
            <span className="font-bold text-yellow-400 transition-colors hover:text-orange-400">
              Gautam Singh
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Animation */}
      <div className="footer-pulse absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

      {/* =========================
          ANIMATIONS
      ========================= */}
      <style>{`
        @keyframes footerGoldSlide {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(500%);
          }

          100% {
            transform: translateX(500%);
          }
        }

        @keyframes footerPulse {
          0%,
          100% {
            opacity: 0.25;
          }

          50% {
            opacity: 1;
          }
        }

        .footer-gold-line {
          animation: footerGoldSlide 4s linear infinite;
        }

        .footer-pulse {
          animation: footerPulse 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-gold-line,
          .footer-pulse {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}