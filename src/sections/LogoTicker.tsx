"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="flex flex-col md:flex-row items-center gap-5">
                    <div className="md:flex-none">
                        <h2 className="text-white/50 text-sm text-center md:text-left">
                            Trusted by the world&apos;s most innovative teams
                        </h2>
                    </div>
                    <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
                        <motion.div
                            className="flex flex-none gap-14 pr-14"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 25,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...logos, ...logos].map(({ name, image }, i) => (
                                <Image
                                    key={i}
                                    src={image}
                                    alt={name}
                                    className="h-6 w-auto"
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
