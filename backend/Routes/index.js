const addUserRoute = require("./addUser");

module.exports = function (app) {
  addUserRoute(app);
};
