const Quote = require("../database/Quote");

const getAllQuotes = () => {
  const allQuotes = Quote.getAllMovieQuotes();
  return allQuotes;
};

const getOneQuote = (movieId) => {
  const quote = Quote.getOneMovieQuote(movieId);
  return quote;
};

module.exports = {
  getAllQuotes,
  getOneQuote
}