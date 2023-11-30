'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type_Kelas.init({
    passenger: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_Kelas',
  });
  return Type_Kelas;
};