const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
app.use(cors());

// Route to fetch quote from external API

app.get("/quote", async (req, res) => {
    try {
        // Check if API key is configured
        if (!process.env.QUOTE_API_KEY) {
            return res.status(500).json({ 
                error: "Quote API key not configured",
                quote: "The best way to predict the future is to invent it.",
                author: "Alan Kay"
            });
        }

        const response = await axios.get(
            "https://api.api-ninjas.com/v2/randomquotes",
            {
                headers: {
                    "X-Api-Key": process.env.QUOTE_API_KEY,
                },
            }
        );
        
        // Handle different response structures
        const quoteData = Array.isArray(response.data) ? response.data[0] : response.data;
        
        if (!quoteData) {
            throw new Error("Invalid response from quote API");
        }

        res.json({
            quote: quoteData.quote || quoteData.content || "No quote available",
            author: quoteData.author || "Unknown",
        });
    } catch (err) {
        console.error("Quote API error:", err.message);
        // Return a fallback quote instead of just an error
        res.json({
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        });
    }
});
app.get("/repo", async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`
        );
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch repos" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
