const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema({
  name: String,
  photo_url: String,
});

mongoose.connect("mongodb://localhost:27017/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connected..."));

const Players = mongoose.model("Player", playersSchema);
