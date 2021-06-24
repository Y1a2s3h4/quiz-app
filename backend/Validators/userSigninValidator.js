const users = require("../Model/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.userSiginValid = async (req, res) => {
  try {
    const { email, password } = req.body;
    const secretKey = process.env.SECRET_KEY;
    if (!email || !password) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Empty Fields Found. Fill Them Up.",
      };
    }
    const getUser = await users.findOne({ email });
    if (!getUser) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Email Not Registered.",
      };
    }
    const isMatched = bcrypt.compareSync(password, getUser.password);
    if (!isMatched) {
      return {
        success: false,
        statusCode: 400,
        errorMsg: "Incorrect Password",
      };
    }
    jwt.sign(
      {
        id: getUser._id,
        username: getUser.username,
        email: getUser.email,
      },
      secretKey,
      (err, tkn) => {
        if (err) {
          return res.status(400).json({ err });
        } else {
          req.token = tkn;
        }
      }
    );
    return {
      success: true,
      statusCode: 200,
      errorMsg: "No Errors",
      tkn: req.token,
      id: getUser._id,
      username: getUser.username,
      email: getUser.email,
    };
  } catch (err) {
    res.json({ Msg: err.message });
  }
};
