"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHONE = "+919386970508"; // TODO: replace with the real gym number

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Contact", href: "#contact" },
];

/* ========== ICONS ========== */

const StarIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="relative z-10 h-7 w-7 text-black"
    >
        <path d="M12 2l2.9 6.26 6.6.57-5 4.4 1.5 6.47L12 16.9 5.99 19.7l1.5-6.47-5-4.4 6.6-.57L12 2z" />
    </svg>
);

const PhoneIcon = ({ className = "h-4 w-4" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const BoltIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-4 w-4"
    >
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
);

/* ========== HEADER ========== */

export default function Header() {
    const [open, setOpen] = useState(false);

    // Close menu with Escape, and when the screen grows to desktop size
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        const onResize = () => window.innerWidth >= 1024 && setOpen(false);
        window.addEventListener("keydown", onKey);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const close = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-[#080808]/95 shadow-[0_8px_30px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            {/* TOP GOLD LINE */}
            <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
                <div className="gold-slide h-full w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-[78px] items-center justify-between gap-4">
                    {/* LOGO */}
                    <Link
                        href="#home"
                        onClick={close}
                        className="group flex shrink-0 items-center gap-3 focus-visible:outline  focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
                    >
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 shadow-[0_0_20px_rgba(245,179,1,0.35)] transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(245,179,1,0.65)] sm:h-12 sm:w-12">
                            <span className="absolute inset-0 animate-pulse rounded-xl bg-yellow-400/30 blur-md" />
                            <StarIcon />
                            <span className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/80 blur-[1px]" />
                        </span>

                        <span className="leading-none">
                            <span className="relative block overflow-hidden text-base font-black tracking-[0.06em] sm:text-xl">
                                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    5 STAR FITNESS
                                </span>
                                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                            </span>

                            <span className="mt-1.5 flex items-center gap-1.5 text-[8px] font-bold tracking-[0.18em] text-white/65 sm:text-[10px] sm:tracking-[0.25em]">
                                <span className="h-px w-2 bg-yellow-500/70 sm:w-3" />
                                GENTS &amp; LADIES
                                <span className="text-yellow-400">•</span>
                                BUXAR
                                <span className="h-px w-2 bg-yellow-500/70 sm:w-3" />
                            </span>
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:block" aria-label="Main">
                        <ul className="flex items-center gap-7 xl:gap-9">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group relative block py-2 text-sm font-semibold tracking-wide text-white/80 transition-colors duration-300 hover:text-yellow-400 focus-visible:text-yellow-400 focus-visible:outline-none"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* DESKTOP CTA */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <a
                            href={`tel:${PHONE}`}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-red-500/30 bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_18px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_8px_25px_rgba(220,38,38,0.45)] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <PhoneIcon />
                                Call Now
                            </span>
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        </a>

                        <Link
                             href="#membership"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 px-6 py-2.5 text-sm font-black tracking-wider text-black shadow-[0_5px_20px_rgba(245,179,1,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,179,1,0.5)]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <BoltIcon />
                                
                                JOIN NOW
                            </span>
                            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 transition-all duration-300 hover:border-yellow-400/40 hover:bg-yellow-500/20 focus-visible:outline  focus-visible:outline-yellow-400 lg:hidden"
                    >
                        <span className="flex flex-col gap-[5px]">
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-yellow-400 transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-yellow-400 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-yellow-400 transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                aria-hidden={!open}
                inert={!open}
                className={`overflow-hidden border-t border-yellow-500/10 bg-[#080808] transition-all duration-500 ease-in-out lg:hidden ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="px-4 pb-5 pt-3 sm:px-6" aria-label="Mobile">
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={close}
                                    className="group flex items-center justify-between rounded-lg border-b border-white/5 px-3 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:bg-yellow-500/10 hover:pl-5 hover:text-yellow-400 focus-visible:bg-yellow-500/10 focus-visible:text-yellow-400 focus-visible:outline-none"
                                >
                                    <span>{link.name}</span>
                                    <span
                                        aria-hidden="true"
                                        className="text-yellow-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                                    >
                                        →
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3 pt-5">
                        <a
                            href={`tel:${PHONE}`}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 active:scale-95"
                        >
                            <PhoneIcon />
                            Call Now
                        </a>

                        <Link
                            href="#join"
                            onClick={close}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 px-4 py-3 text-sm font-black text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 active:scale-95"
                        >
                            <BoltIcon />
                            Join Now
                        </Link>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-semibold tracking-[0.25em] text-white/30">
                        <span aria-hidden="true">⭐</span>
                        PREMIUM FITNESS
                        <span>•</span>
                        BUXAR
                        <span aria-hidden="true">⭐</span>
                    </div>
                </nav>
            </div>

            {/* ANIMATION (plain <style> instead of styled-jsx, so it works everywhere) */}
            <style>{`
        @keyframes slideGold {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(300%); }
          100% { transform: translateX(300%); }
        }
        .gold-slide { animation: slideGold 4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .gold-slide { animation: none; }
        }
      `}</style>
        </header>
    );
}