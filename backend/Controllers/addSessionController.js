const quiz = require("../Model/quiz");
const { quizValid } = require("../Validators/quizValidator");
exports._addSession = async (req, res) => {
  try {
    const { success, statusCode, errorMsg } = await quizValid(req, res);
    if (success === false) {
      return res.status(statusCode).json({ errorMsg });
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};
