const router = require("express").Router();

router.use("/signup", require("./addUser"));
router.use("/signin", require("./userSignin"));
router.use("/addquiz", require("./addQuiz"));
router.use("/addsession", require("./addSession"));
router.use("/getsession", require("./getSession"));
module.exports = router;
