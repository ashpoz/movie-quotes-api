const express = require("express");
const v1WorkoutRouter = require("./v1/routes/quotesRouter.js");

const app = express();
const PORT = 3000;

app.use("/api/v1/quotes", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;