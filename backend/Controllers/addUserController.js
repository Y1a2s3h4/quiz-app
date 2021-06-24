const users = require("../Model/users");
const bcrpyt = require("bcryptjs");
const { validUserData } = require("../Validators/validUsersData");
exports._addUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const { success, statusCode, errorMsg } = await validUserData(req, res);
    const getHashedPass = (password) => bcrpyt.hashSync(password, 10);
    if (success === false) {
      return res.status(statusCode).json({ success, errorMsg });
    } else {
      const user = await users.create({
        email,
        username,
        password: getHashedPass(password),
      });
      return res.status(statusCode).json({ success, user });
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};
