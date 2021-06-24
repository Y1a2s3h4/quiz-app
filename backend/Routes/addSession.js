const router = require("express").Router();
const { _addSession } = require("../Controllers/addSessionController");
router.route("/").post(_addSession);

module.exports = router;
