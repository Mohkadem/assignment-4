import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";
// Components
import AnimatedText from "./AnimatedText";
// Icons
import { SiReact, SiJavascript, SiTailwindcss, SiFigma } from "react-icons/si";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
const Hero = () => {
    useEffect(() => {
        const icons = [
            { selector: ".react", offset: 0 },
            { selector: ".js", offset: 0.25 },
            { selector: ".tailwind", offset: 0.5 },
            { selector: ".figma", offset: 0.75 },
        ];
        const tl = gsap.timeline({ delay: 1 });
        tl.fromTo(
            [".react", ".js", ".tailwind", ".figma"],
            { opacity: 0, scale: 0.5 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.2,
            }
        );
        const path = MotionPathPlugin.convertToPath("#path", false)[0];
        icons.forEach(({ selector, offset }) => {
            gsap.to(selector, {
                duration: 10,
                repeat: -1,
                ease: "linear",
                motionPath: {
                    path: path,
                    align: path,
                    alignOrigin: [0.5, 0.5],
                    start: offset,
                    end: offset + 1,
                    autoRotate: true,
                },
            });
        });
    }, []);
    useEffect(() => {
        const welcomeSplit = new SplitText(".welcoming", { type: "words" });
        const tl = gsap.timeline();
        tl.fromTo(
            welcomeSplit.words,
            { yPercent: 50, opacity: 0 },
            {
                yPercent: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.inOut",
                stagger: 0.06,
            }
        );
    });
    useEffect(() => {
        const main = SplitText.create(".main-title", {
            type: "letters",
        });
        const tl = gsap.timeline();
        tl.fromTo(
            main.letters,
            { yPercent: 50, opacity: 0 },
            {
                yPercent: 0,
                opacity: 1,
                stagger: 0.06,
                delay: 1,
                duration: 1.2,
                ease: "back.inOut",
            }
        );
    });
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".image",
            {
                yPercent: 50,
                opacity: 0,
            },
            { yPercent: 0, opacity: 1, delay: 1, duration: 1.2 }
        );
    });

    return (
        <>
            <div id="hero" className="scroll-mt-20">
                <div className="info">
                    <div className="wrapper">
                        <span className="welcoming text-lg sm:text-xl md:text-2xl">Hey, I am Moh</span>
                        <br />
                        <span className="main-title">Web Developer</span>
                        <AnimatedText className="animated-text" />
                    </div>
                </div>

                <div className="hidden md:block absolute right-5 -bottom-15">
                    <svg width="400" height="400" viewBox="0 0 400 400" className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                        <path
                            id="path"
                            d="M 200,0 A 200,200 0 1,1 199.9,0"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                        />
                    </svg>
                    <SiReact className="react absolute w-6 h-6 lg:w-8 lg:h-8" />
                    <SiJavascript className="js w-6 h-6 lg:w-8 lg:h-8" />
                    <SiTailwindcss className="tailwind w-6 h-6 lg:w-8 lg:h-8" />
                    <SiFigma className="figma w-6 h-6 lg:w-8 lg:h-8" />
                </div>
            </div>
        </>
    );
};

export default Hero;
