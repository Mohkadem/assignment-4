import { FaStar } from "react-icons/fa";

const GlowCard = ({ card, children }) => {
    return (
        <div className="card card-border timeline-card rounded-xl p-10">
            <div className="glow" />
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                        key={i}
                        className="size-5 " // Tailwind styling
                    />
                ))}
            </div>
            <div className="mb-5">
                <p className="text-lg text-black dark:text-white">{card.disc}</p>
            </div>
            {children}
        </div>
    );
};

export default GlowCard;
