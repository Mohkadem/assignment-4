import { useState, useEffect } from "react";
import { headerLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [glassy, setGlassy] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Animate elements in the header
    // useEffect(() => {
    //     const tl = gsap.timeline();
    //     tl.fromTo(
    //         ".nav-links",
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             stagger: 0.1,
    //             duration: 0.6,
    //             delay: 1,
    //             ease: "power2.out",
    //         }
    //     );
    // }, []);
    // Listen to scroll changes once
    useEffect(() => {
        const handleGlassy = () => {
            setGlassy(window.scrollY >= 60);
        };
        window.addEventListener("scroll", handleGlassy);
        return () => window.removeEventListener("scroll", handleGlassy);
    }, []);

    // Animate only when glassy is true
    useGSAP(() => {
        const nav = document.querySelector("nav");

        if (glassy) {
            gsap.to(nav, {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                duration: 0.6,
                ease: "power1.inOut",
            });
        } else {
            gsap.to(nav, {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                duration: 0.6,
                ease: "power1.inOut",
            });
        }
    }, [glassy]);

    return (
        <nav id="main" className="mt-4">
            <div className="flex justify-between items-center">
                <span className="title">Portfolio</span>
                
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6">
                    {headerLinks.map((e) => (
                        <li className="nav-links" key={e.id}>
                            <a
                                href={`#${e.id}`}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {e.title}
                            </a>
                        </li>
                    ))}
                    <ThemeToggle />
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#121212] z-40 transition-transform duration-300 ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {headerLinks.map((e) => (
                        <a
                            key={e.id}
                            href={`#${e.id}`}
                            className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {e.title}
                        </a>
                    ))}
                    <div className="mt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
