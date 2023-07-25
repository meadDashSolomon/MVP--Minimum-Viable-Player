const express = require("express");
const app = express();
const port = 3000;
const { checkPlayer } = require("./controller");

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.json());

// Get/Post/Put Requests
// app.get("/", (req, res) => {});
