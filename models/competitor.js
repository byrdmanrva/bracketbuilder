module.exports = function(sequelize, DataTypes) {
  var Competitors = sequelize.define("Competitors", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    belt_color: DataTypes.STRING,
    weight: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  });
  return Competitors;
};

