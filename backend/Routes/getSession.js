const router = require("express").Router();
const { _getSession } = require("../Controllers/getSessionsController");
router.route("/").post(_getSession);

module.exports = router;
