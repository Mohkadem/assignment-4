import { FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
export const headerLinks = [
    {
        id: "hero",
        title: "Home",
    },

    {
        id: "work",
        title: "Work",
    },
    {
        id: "steps",
        title: "Steps",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
export const works = [
    {
        id: "one",
        title: "GYM",
        cat: "web",
        disc: "Personalized AI GYM",
    },
    {
        id: "two",
        title: "Robotics",
        cat: "robotics",
        disc: "Programming",
    },
    {
        id: "three",
        title: "Portfolio",
        cat: "Web",
        disc: "Basic Portfolio",
    },
    {
        id: "four",
        title: "Figma",
        cat: "UI/UX",
        disc: "Prototype",
    },
];
export const buttons = [
    { id: 1, title: "Date (Ascending)" },
    { id: 2, title: "Date (Descending)" },
];
export const stepsCard = [
    {
        title: "1️⃣ Planning & Design",
        disc: "Define project goals, target audience, and design layout using wireframes and mockups.",
        icon: FaPencilRuler,
        days: "Days 1–3",
        responsibility: [
            "Gather requirements and create site map",
            "Design wireframes and UI mockups",
            "Choose color palette, fonts, and branding",
        ],
    },
    {
        title: "2️⃣ Development & Integration",
        disc: "Turn designs into code and implement functionality using modern web technologies.",
        icon: FaCode,
        days: "Days 4–8",
        responsibility: [
            "Build responsive layout using HTML, CSS (TailwindCSS)",
            "Add interactivity with JavaScript/React",
            "Integrate APIs or CMS if needed",
        ],
    },
    {
        title: "3️⃣ Testing & Deployment",
        disc: "Test the website for performance and deploy it to production.",
        icon: FaRocket,
        days: "Days 9–10",
        responsibility: [
            "Run usability and performance tests",
            "Fix bugs and optimize assets",
            "Deploy website using Vercel or Netlify",
        ],
    },
];
