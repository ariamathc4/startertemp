"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

function Word({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: MotionValue<number>;
}) {
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-3 lg:mr-4">
            {word}
        </motion.span>
    );
}

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end start"],
    });

    return (
        <section className="py-28 lg:py-40">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="sticky top-28 md:top-32">
                    <div className="flex justify-center">
                        <div className="inline-flex border border-white/15 px-3 py-1 rounded-full text-sm">
                            Introducing Layers
                        </div>
                    </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl text-center font-medium mt-10 flex flex-wrap justify-center">
                        {words.map((word, i) => (
                            <Word
                                key={i}
                                word={word}
                                progress={scrollYProgress}
                                range={[i / words.length, (i + 1) / words.length]}
                            />
                        ))}
                        <span className="text-lime-400 block w-full mt-4">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]" />
            </div>
        </section>
    );
}
