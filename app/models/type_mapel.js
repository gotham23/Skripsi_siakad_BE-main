'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_Mapels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type_Mapels.init({
    mapel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_Mapels',
  });
  return Type_Mapels;
};