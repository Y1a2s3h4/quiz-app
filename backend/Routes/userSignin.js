const router = require("express").Router();
const { _userSigin } = require("../Controllers/userSigninController");

router.route("/").post(_userSigin);

module.exports = router;
