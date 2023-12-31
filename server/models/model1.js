const mongoose = require("mongoose");
// import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  highScore: {
    type: Number,
    default: 0,
  },
});

mongoose.connect("mongodb://localhost:27017/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connected..."));

const User = mongoose.model("User", UserSchema);

export const saveUser = async (
  username: string,
  password: string
): Promise<unknown> => {
  const user = new User({ username, password });
  // console log the return to set unknown above or dont it wont break anything
  return user.save();
};

// exports.saveScore = async (highScore, username) => {
//   return User.updateOne(
//     { username: username },
//     { $set: { highScore: highScore } }
//   );
// };
