const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
app.use(cors());

// Route to fetch quote from external API

app.get("/quote", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.api-ninjas.com/v2/randomquotes",
            {
                headers: {
                    "X-Api-Key": process.env.QUOTE_API_KEY,
                },
            }
        );
        const quoteData = response.data[0];
        res.json({
            quote: quoteData.quote || response.data.content,
            author: quoteData.author,
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch quote" });
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

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
