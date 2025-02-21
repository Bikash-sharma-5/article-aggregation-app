const axios = require("axios");
const Article = require("../models/Article");

const fetchArticles = async () => {
    const categories = ["technology", "sports", "health", "business"];
    
    for (let category of categories) {
        try {
            // Fetching from Serper.dev
            let response = await axios.post("https://google.serper.dev/search", 
                { q: category },
                { headers: { "X-API-KEY": process.env.SERPER_API_KEY } }
            );

            const serperResults = response.data.organic.map(result => ({
                title: result.title,
                link: result.link,
                summary: result.snippet,
                category
            }));

            // Fetching from Google AI Studio
            let googleAIResponse = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText",
                { prompt: { text: `Latest news about ${category}` } },
                { headers: { "X-API-KEY": process.env.GOOGLE_AI_KEY } }
            );

            const aiSummary = googleAIResponse.data.candidates[0]?.output || "No summary available.";

            serperResults.forEach(async (article) => {
                const newArticle = new Article({
                    title: article.title,
                    link: article.link,
                    summary: aiSummary,
                    category
                });
                await newArticle.save();
            });

        } catch (error) {
            console.error("Error Fetching Articles:", error);
        }
    }
};

module.exports = fetchArticles;
