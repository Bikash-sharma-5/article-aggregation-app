const Article = require("../models/Article");
const User = require("../models/User");

exports.getUserArticles = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const userCategories = user.categories.map(cat => cat.toLowerCase());

        const articles = await Article.find({
            category: { $in: userCategories }
        }).sort({ createdAt: -1 });

        res.json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Server error" });
    }
};
