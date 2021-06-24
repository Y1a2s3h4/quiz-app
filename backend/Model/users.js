const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});
module.exports = mongoose.model("users", Users);
