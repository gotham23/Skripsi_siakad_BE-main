const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
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
  Activities.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // user_id: DataTypes.UUID,
      name: DataTypes.STRING,
      s_activity: DataTypes.DATE,
      e_activity: DataTypes.DATE,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Activities',
    }
  );
  return Activities;
};
