import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants/index";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert("Message sent successfully!");
            setEmail("");
        }
    };

    // Fetch quote from backend
    const fetchQuote = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/quote`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setQuote(data.quote);
            setAuthor(data.author);
        } catch (err) {
            console.error("Error in fetching quotes:", err);
            setQuote("Failed to load quote.");
            setAuthor("Error :(");
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <section
            id="contact"
            className="mt-20 scroll-mt-20 min-h-screen py-10 flex flex-col lg:flex-row items-center justify-center gap-8 dark:text-gray-200 px-4"
        >
            <div className="dark:bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 dark:text-black">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                    <div>
                        <label className="block text-sm mb-2 dark:text-black">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 sm:py-3 rounded-lg bg-white text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border ${
                                error
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                            } focus:outline-none focus:ring-2 transition text-sm sm:text-base`}
                        />
                        {error && (
                            <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-200 dark:text-white mb-2">
                            Message
                        </label>
                        <textarea
                            placeholder="Drop a message..."
                            rows="4"
                            className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-sm sm:text-base"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 sm:mt-4 w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2 sm:py-3 rounded-lg transition text-white text-sm sm:text-base"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div id="quote" className="text-center w-full sm:max-w-sm px-4">
                {quote && (
                    <>
                        <p className="italic text-base sm:text-lg text-gray-500 dark:text-gray-400">
                            "{quote}"
                        </p>
                        <p className="font-bold mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                            - {author}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
};

export default Contact;
