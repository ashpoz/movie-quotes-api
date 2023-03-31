const DB = require("./movieQuotes.json");

const getAllMovieQuotes = () => {
  return DB.movieQuotes;
};

const getOneMovieQuote = (quoteId) => {
  return DB.movieQuotes.find(quote => quote.id === Number(quoteId));
};

module.exports = { getAllMovieQuotes, getOneMovieQuote };