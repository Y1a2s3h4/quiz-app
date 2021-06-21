const { _addUser } = require("../Controllers/addUserController");

module.exports = function (app) {
  app.route("/signup").post(_addUser);
};
