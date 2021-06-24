const { userSiginValid } = require("../Validators/userSigninValidator");
exports._userSigin = async (req, res) => {
  try {
    const { success, statusCode, errorMsg } = await userSiginValid(req, res);
    if (!!success === false) {
      return res.status(statusCode).json({ errorMsg });
    } else {
      const { tkn, id, username, email } = await userSiginValid(req, res);
      return res.status(200).json({ tkn, id, username, email });
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};
