const jwt = require("jsonwebtoken");
exports.verifyUser = async (req, res, next) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const bearerHeader = req.headers["authorization"];
    const bearer = bearerHeader && bearerHeader.split(" ")[1];
    if (bearer == null) {
      return { err: "invalid token" };
    }
    jwt.verify(bearer, secretKey, (err, authData) => {
      if (err) {
        return { err: "err in auth data" };
      } else {
        req.authData = authData;
      }
      next();
    });
  } catch (err) {
    res.status(400).json({ errMsg: err.message });
  }
};
