const quiz = require("../Model/quiz");
const { quizValid } = require("../Validators/quizValidator");
const { verifyUser } = require("../Validators/verify");
exports._addSession = async (req, res, next) => {
  try {
    const err = await verifyUser(req, res, next);
    if (err) {
      return res.status(400).json({ err: err.err });
    }
    const { success, statusCode, errorMsg } = await quizValid(req, res);
    if (success === false) {
      return res.status(statusCode).json({ errorMsg });
    } else {
      const { statusCode, sessions } = await quizValid(req, res);

      await quiz.updateMany(
        { email: req.authData.email },
        { $push: { sessions } }
      );

      return res
        .status(statusCode)
        .json(await quiz.findOne({ email: req.authData.email }));
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};
