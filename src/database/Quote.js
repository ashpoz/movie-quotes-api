const DB = require("./movieQuotes.json");

const getAllMovieQuotes = () => {
  return DB.movieQuotes;
};

const getMovieQuotes = (quoteId) => {
  return DB.movieQuotes.find(quote => quote.id === Number(quoteId));
};

// TODO: make endpoint to grab random movie quote
const getRandomMovieQuote = () => {
  return DB.movieQuotes.find(quote => quote.id === Number(quoteId));
};

module.exports = { getAllMovieQuotes, getMovieQuotes };