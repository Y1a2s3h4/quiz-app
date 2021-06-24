const router = require("express").Router();
const { _addQuiz } = require("../Controllers/addQuizController");
router.route("/").post(_addQuiz);

module.exports = router;
