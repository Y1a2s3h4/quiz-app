const { verifyUser } = require("../Validators/verify");
const quiz = require("../Model/quiz");
exports._getSession = async (req, res, next) => {
  try {
    const err = await verifyUser(req, res, next);
    if (err) {
      return res.json({ err: err.err });
    }
    const emailSession = await quiz.findOne({ email: req.authData.email });
    console.log(emailSession);
    if (!emailSession) {
      return res.status(400).json({ errMsg: "No User. No sessions." });
    }
    if (!!emailSession) {
      return res.status(200).json(emailSession);
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};
