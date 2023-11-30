'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penilaians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsTo(models.Siswas, {
        foreignKey: 'siswa_id',
        as: 'siswa'
      });
      this.belongsTo(models.Type_Mapels, {
        foreignKey: 'type',
        as: 'mapel'
      });
    };
    
  };
  Penilaians.init({
    user_id :DataTypes.UUID,
    siswa_id: DataTypes.UUID,
    type: DataTypes.INTEGER,
    nilai : DataTypes.INTEGER,
    deleted : DataTypes.BOOLEAN,
  }, {
    sequelize,modelName: 'Penilaians',
  });
  return Penilaians;
};