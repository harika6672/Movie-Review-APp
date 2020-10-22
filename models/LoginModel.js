const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must have name"],
  },
  email: {
    type: String,
    required: [true, "Must have email"],
  },
  password: {
    type: String,
    required: [true, "Must have password"],
  },
  role: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("Login", loginSchema);

module.exports = User;
