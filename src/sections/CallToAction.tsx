export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="border border-white/15 rounded-3xl py-24 px-8 text-center relative overflow-hidden">
                    <div
                        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />
                    <div className="absolute left-1/2 top-full -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-[120px]" />

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium max-w-2xl mx-auto">
                        Get started with Layers today
                    </h2>
                    <p className="text-white/50 text-lg mt-6 max-w-xl mx-auto">
                        Join thousands of designers who create impactful work, faster
                        than ever before.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 w-full bg-transparent border border-white/15 rounded-full px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto whitespace-nowrap bg-lime-400 text-neutral-950 font-medium px-5 py-3 rounded-full hover:bg-lime-300 transition"
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
