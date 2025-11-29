import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    // Initialize with saved theme or default to dark
    const [theme, setTheme] = useState(() => {
        // Check localStorage first, then system preference, then default to dark
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
        }
        return "dark";
    });

    // Apply theme class to html element on mount and whenever it changes
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Apply theme immediately on mount to prevent flash
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            return newTheme;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
};

export default ThemeToggle;
