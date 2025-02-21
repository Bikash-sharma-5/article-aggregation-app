const axios = require("axios");

const summarizeArticle = async (url) => {
    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1/models/text-bison-001:generateText",
            {
                prompt: `Summarize this article: ${url}`,
            },
            { params: { key: process.env.GOOGLE_API_KEY } }
        );
        return response.data.candidates[0].output;
    } catch (error) {
        console.error("Summarization error:", error);
        return "Summary unavailable";
    }
};

module.exports = summarizeArticle;
