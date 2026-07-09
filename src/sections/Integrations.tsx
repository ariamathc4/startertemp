"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";

const integrations = [
    { name: "Figma", icon: figmaLogo, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];

function IntegrationsColumn({
    reverse,
}: {
    reverse?: boolean;
}) {
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-6 pb-6"
        >
            {[...integrations, ...integrations].map((integration, i) => (
                <div
                    key={i}
                    className="border border-white/15 rounded-3xl p-6 bg-neutral-900/50"
                >
                    <div className="flex justify-center">
                        <Image
                            src={integration.icon}
                            alt={integration.name}
                            className="h-12 w-auto"
                        />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                    <p className="text-center text-white/50 mt-2">
                        {integration.description}
                    </p>
                </div>
            ))}
        </motion.div>
    );
}

export default function Integrations() {
    return (
        <section id="integrations" className="py-24 overflow-hidden">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <div className="inline-flex border border-white/15 px-3 py-1 rounded-full text-sm">
                            Integrations
                        </div>
                        <h2 className="text-5xl md:text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seamlessly connects with your favorite tools, making
                            it easy to plug into any workflow and collaborate across
                            platforms.
                        </p>
                    </div>
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationsColumn />
                        <IntegrationsColumn reverse />
                    </div>
                </div>
            </div>
        </section>
    );
}
