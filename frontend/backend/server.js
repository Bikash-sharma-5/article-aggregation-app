const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const fetchArticles = require("./utils/fetchArticles");
const cron = require("node-cron");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

// Schedule Article Fetching (Every Hour)
cron.schedule("0 * * * *", fetchArticles);

app.listen(8000, () => console.log("Server running on port 8000"));
