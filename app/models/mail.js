'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Users, {
      //   foreignKey: 'user_id',
      //   as: 'user',
      // });
    }
  }
  Mails.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // user_id: DataTypes.UUID,
      to: DataTypes.STRING,
      subject: DataTypes.STRING,
      text: DataTypes.STRING,
      lampiran: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Mails',
    }
  );
  return Mails;
};
