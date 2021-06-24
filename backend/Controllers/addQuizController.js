const { verifyUser } = require("../Validators/verify");
const quiz = require("../Model/quiz");
exports._addQuiz = async (req, res, next) => {
  try {
    const err = await verifyUser(req, res, next);
    if (err) {
      return res.json({ err: err.err });
    }
    const emailSession = await quiz.findOne({ email: req.authData.email });
    console.log(emailSession);
    if (!emailSession) {
      const quizSession = await quiz.create({
        email: req.authData.email,
      });
      console.log(quizSession);
      return res.status(200).json(quizSession);
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};
