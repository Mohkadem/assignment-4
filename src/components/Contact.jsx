import { useState, useEffect } from "react";

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
            const response = await fetch("http://localhost:3001/quote");
            const data = await response.json();
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
            className="mt-20 scroll-mt-20 h-screen flex items-center justify-center dark:text-gray-200"
        >
            <div className="dark:bg-gray-100 rounded-2xl p-10 w-[90%] sm:w-[70%] md:w-[50%] shadow-lg mb-10 ">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-black">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm  mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg bg-white text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border ${
                                error
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                            } focus:outline-none focus:ring-2 transition`}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-200 dark:text-white mb-2">
                            Message
                        </label>
                        <textarea
                            placeholder="Drop a message..."
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-white  text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600font-semibold py-3 rounded-lg transition text-black dark:text-gray-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div id="quote" className="text-center max-w-sm">
                {quote && (
                    <>
                        <p className="italic text-lg text-gray-500">
                            "{quote}"
                        </p>
                        <p className="font-bold mt-2 text-gray-500">
                            - {author}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
};

export default Contact;
