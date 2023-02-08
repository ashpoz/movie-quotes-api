const express = require("express");
const quoteController = require("../../controllers/quoteController")
const router = express.Router();

router.get("/", quoteController.getAllQuotes);

router.get("/:quoteId", quoteController.getOneQuote);

module.exports = router;