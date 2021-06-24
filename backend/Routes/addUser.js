const router = require("express").Router();
const { _addUser } = require("../Controllers/addUserController");

router.route("/").post(_addUser);

module.exports = router;
