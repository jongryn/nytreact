const router = require("express").Router();
const articlesRoutes = require("./articles");

// Book routes
router.use("/aritcles", articlesRoutes);

module.exports = router;