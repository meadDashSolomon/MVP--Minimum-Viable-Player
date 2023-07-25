const { findPlayer } = require("./model");

// does TS require a different export technique?
exports.checkPlayer = (queryTerm, res) => {
  return findPlayer(queryTerm)
    .then((wasGuessCorrect) => {
      console.log("");
      // res . . .
      return wasGuessCorrect;
    })
    .catch((err) => {
      console.log("");
      return res.sendStatus(400);
    });
};
