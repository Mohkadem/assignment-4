import { useEffect, useState, useCallback, useMemo } from "react";
import { works, buttons } from "../../constants/index";
import Card from "./Card";

const Work = () => {
    const [active, setActive] = useState(buttons[0].id);
    const [search, setSearch] = useState("");
    const [repos, setRepos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const CARDS_PER_PAGE = 3;

    // Filter repos based on search
    const filteredRepos = useMemo(() => {
        return repos.filter((repo) =>
            repo.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [repos, search]);

    // Sort repos based on active button
    const sortedRepos = useMemo(() => {
        if (filteredRepos.length === 0) return [];

        return [...filteredRepos].sort((a, b) => {
            // Ensure we have created_at field
            if (!a.created_at || !b.created_at) {
                if (!a.created_at && !b.created_at) return 0;
                if (!a.created_at) return 1;
                if (!b.created_at) return -1;
            }

            // Parse dates explicitly - GitHub API returns ISO 8601 format (e.g., "2024-01-15T10:30:00Z")
            // Use Date.parse() for explicit timestamp parsing, then create Date objects
            const timestampA = Date.parse(a.created_at);
            const timestampB = Date.parse(b.created_at);

            // Validate timestamps are valid (not NaN)
            if (isNaN(timestampA) && isNaN(timestampB)) return 0;
            if (isNaN(timestampA)) return 1; // Invalid date goes to end
            if (isNaN(timestampB)) return -1; // Invalid date goes to end

            // Direct numeric comparison of timestamps (milliseconds since epoch)
            // This includes ALL date components: year, month, day, hours, minutes, seconds, milliseconds
            const comparison = timestampA - timestampB;

            if (active === 1) {
                // Date (Ascending) - oldest first
                return comparison;
            } else {
                // Date (Descending) - newest first
                return -comparison;
            }
        });
    }, [filteredRepos, active]);

    // Get the current 3 cards to display
    const displayedRepos = sortedRepos.slice(
        currentIndex,
        currentIndex + CARDS_PER_PAGE
    );

    // Reset index when search or sort changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [search, active]);

    // Navigation functions
    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev + CARDS_PER_PAGE < sortedRepos.length) {
                return prev + CARDS_PER_PAGE;
            }
            return prev;
        });
    }, [sortedRepos.length]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev > 0) {
                return Math.max(0, prev - CARDS_PER_PAGE);
            }
            return prev;
        });
    }, []);

    // Handle arrow key navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            // Only handle if not typing in input
            if (e.target.tagName === "INPUT") return;

            if (e.key === "ArrowRight") {
                e.preventDefault();
                handleNext();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleNext, handlePrevious]);

    useEffect(() => {
        const fetchRepo = async () => {
            try {
                const response = await fetch("http://localhost:3001/repo");
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                console.log("Error");
            }
        };
        fetchRepo();
    }, []);

    return (
        <div id="work" className="work h-screen overflow-hidden scroll-mt-20">
            <div className="buttons">
                {buttons.map((e) => (
                    <button
                        key={e.id}
                        className={`button ${
                            active === e.id ? "bg-blue-400" : "bg-transparent"
                        } text-black dark:text-white border-black dark:border-white`}
                        onClick={() => setActive(e.id)}
                    >
                        {e.title}
                    </button>
                ))}
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search works...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-black dark:border-white bg-white  text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <section className="w-full px-4">
                <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className={`p-2 md:p-3 rounded-lg text-sm md:text-base shrink-0 ${
                            currentIndex === 0
                                ? "bg-gray-400 cursor-not-allowed opacity-50"
                                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                        } text-white transition-colors`}
                        aria-label="Previous cards"
                    >
                        ←
                    </button>
                    <div className="cards flex justify-between w-[70%]">
                        {displayedRepos.length > 0 ? (
                            displayedRepos.map((r) => (
                                <Card
                                    key={r.id}
                                    title={`Title: ${r.name
                                        .split("-")
                                        .slice(2, -1)
                                        .join(" ")}`}
                                    link={r.html_url}
                                    createdAt={r.created_at}
                                    className="bg-gray-100 "
                                />
                            ))
                        ) : (
                            <p className="text-center col-span-full text-black dark:text-white">
                                No Repos Found.
                            </p>
                        )}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={
                            currentIndex + CARDS_PER_PAGE >= sortedRepos.length
                        }
                        className={`p-2 md:p-3 rounded-lg text-sm md:text-base shrink-0 ${
                            currentIndex + CARDS_PER_PAGE >= sortedRepos.length
                                ? "bg-gray-400 cursor-not-allowed opacity-50"
                                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                        } text-white transition-colors`}
                        aria-label="Next cards"
                    >
                        →
                    </button>
                </div>
                {sortedRepos.length > 0 && (
                    <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Showing {currentIndex + 1}-
                        {Math.min(
                            currentIndex + CARDS_PER_PAGE,
                            sortedRepos.length
                        )}{" "}
                        of {sortedRepos.length} repos
                    </div>
                )}
            </section>
        </div>
    );
};

export default Work;
