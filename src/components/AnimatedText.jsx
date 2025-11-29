import React, { useEffect, useState } from "react";

const AnimatedText = () => {
    const texts = ["Full Stack Developer", "React Enthusiast", "UI/UX Lover"];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[currentIndex];
        const speed = deleting ? 50 : 150;

        const timer = setTimeout(() => {
            setCurrentText(
                deleting
                    ? current.substring(0, currentText.length - 1)
                    : current.substring(0, currentText.length + 1)
            );

            if (!deleting && currentText === current) {
                setTimeout(() => setDeleting(true), 10000); // wait before deleting
            } else if (deleting && currentText === "") {
                setDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [currentText, deleting, currentIndex, texts]);

    return (
        <div className="text-center md:text-start">
            <h1 className="text-black dark:text-white mb-6">
                {currentText}
                <span className="inline-block h-3 w-0.5 bg-black dark:bg-white animate-pulse ml-2"></span>
            </h1>
        </div>
    );
};

export default AnimatedText;
