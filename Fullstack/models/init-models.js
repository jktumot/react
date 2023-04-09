var DataTypes = require("sequelize").DataTypes;
var _r1022 = require("./r1022");

function initModels(sequelize) {
  var r1022 = _r1022(sequelize, DataTypes);


  return {
    r1022,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
