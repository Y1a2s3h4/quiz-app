const mongoose = require("mongoose");

const Quiz = new mongoose.Schema({
  email: String,
  sessions: [
    {
      sessionNo: {
        type: Number,
        default: 0,
      },
      sessionTitle: String,
      questions: [
        {
          question: String,
          ansKey: String,
          options: [String],
        },
      ],
    },
  ],
});
module.exports = mongoose.model("quizcollections", Quiz);
