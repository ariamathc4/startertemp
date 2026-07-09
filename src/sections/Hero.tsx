"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container max-w-5xl mx-auto px-4">
                <motion.div
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight max-w-3xl">
                        Impactful design, created effortlessly
                    </h1>

                    <p className="text-lg md:text-xl text-white/50 mt-8 max-w-2xl">
                        Design tools shouldn&apos;t slow you down. Layers combines
                        powerful features with an intuitive interface that keeps you in
                        your creative flow.
                    </p>

                    <form className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 w-full bg-transparent border border-white/15 rounded-full px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto whitespace-nowrap bg-lime-400 text-neutral-950 font-medium px-5 py-3 rounded-full hover:bg-lime-300 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
