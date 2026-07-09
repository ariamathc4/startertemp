import Image from "next/image";
import mousePointer from "@/assets/images/mouse-pointer.svg";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section id="features" className="py-24">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="flex justify-center">
                    <div className="inline-flex border border-white/15 px-3 py-1 rounded-full text-sm">
                        Features
                    </div>
                </div>
                <h2 className="text-5xl md:text-6xl text-center font-medium mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>

                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    <div className="border border-white/15 rounded-3xl overflow-hidden lg:col-span-2">
                        <div className="aspect-video">
                            <video
                                src="/gif-incredible.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-medium">
                                Real-time Collaboration
                            </h3>
                            <p className="text-white/50 mt-2">
                                Work together seamlessly with conflict-free team
                                editing.
                            </p>
                        </div>
                    </div>

                    <div className="border border-white/15 rounded-3xl p-8 flex flex-col">
                        <div className="aspect-video flex items-center justify-center bg-white/5 rounded-2xl">
                            <Image src={mousePointer} alt="" className="w-10 h-auto" />
                        </div>
                        <h3 className="text-2xl font-medium mt-8">
                            Interactive Prototyping
                        </h3>
                        <p className="text-white/50 mt-2">
                            Engage your clients with prototypes that react to user
                            actions.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="inline-flex items-center gap-3 border border-white/15 px-4 py-2 rounded-2xl hover:border-lime-400 transition group"
                        >
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-lime-400 text-neutral-950 text-lg leading-none group-hover:rotate-45 transition-transform">
                                &#43;
                            </span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
