const express = require("express");
const { getUserArticles } = require("../controllers/articleController");

const router = express.Router();

router.get("/:userId", getUserArticles);

module.exports = router;
