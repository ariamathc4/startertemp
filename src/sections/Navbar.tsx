"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="border border-white/15 p-2 px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
                        <div>
                            <Image
                                src={logoImage}
                                alt="Layers logo"
                                className="h-9 w-auto"
                            />
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="flex justify-end items-center gap-4">
                            {/* Mobile menu toggle */}
                            <button
                                type="button"
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className="origin-left transition"
                                        style={{
                                            transform: isOpen
                                                ? "rotate(45deg) translate(1px, -1px)"
                                                : "none",
                                        }}
                                    />
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className="transition"
                                        style={{ opacity: isOpen ? 0 : 1 }}
                                    />
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className="origin-left transition"
                                        style={{
                                            transform: isOpen
                                                ? "rotate(-45deg) translate(1px, 1px)"
                                                : "none",
                                        }}
                                    />
                                </svg>
                            </button>

                            <button className="hidden lg:inline-flex items-center justify-center bg-white text-neutral-950 font-medium py-2 px-4 ring-2 ring-transparent ring-offset-2 ring-offset-neutral-950 hover:ring-white hover:bg-white/90 transition">
                                Sign In
                            </button>
                            <button className="hidden lg:inline-flex items-center justify-center bg-lime-400 text-neutral-950 font-medium py-2 px-4 ring-2 ring-transparent ring-offset-2 ring-offset-neutral-950 hover:ring-white hover:bg-lime-300 transition">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu panel */}
                    {isOpen && (
                        <div className="lg:hidden flex flex-col items-center gap-4 py-4 mt-2 border-t border-white/15">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/70 hover:text-white transition font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="w-full bg-white text-neutral-950 font-medium py-2 px-4 hover:bg-white/90 transition">
                                Sign In
                            </button>
                            <button className="w-full bg-lime-400 text-neutral-950 font-medium py-2 px-4 hover:bg-lime-300 transition">
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
