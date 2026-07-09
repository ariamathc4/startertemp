import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/15">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:justify-between">
                    <div>
                        <Image src={logoImage} alt="Layers logo" className="h-9 w-auto" />
                    </div>
                    <nav className="flex flex-col sm:flex-row gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/50 hover:text-white transition text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <p className="text-white/30 text-sm mt-8">
                    &copy; 2026 Layers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
