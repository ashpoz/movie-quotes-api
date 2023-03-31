const quoteService = require("../services/quoteService");


const getAllQuotes = (req, res) => {
  const allQuotes = quoteService.getAllQuotes();
  res.send({ status: "OK", data: allQuotes });
};

const getOneQuote = (req, res) => {
  const {
    params: { quoteId },
  } = req;

  if (!quoteId) return;

  const quote = quoteService.getOneQuote(quoteId);
  res.send({ status: "OK", data: quote });
};

module.exports = {
  getAllQuotes,
  getOneQuote
};