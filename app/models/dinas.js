const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dinas extends Model {
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
  Dinas.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // user_id: DataTypes.UUID,
      name: DataTypes.STRING,
      jabatan: DataTypes.STRING,
      unit_kerja: DataTypes.STRING,
      keperluan: DataTypes.STRING,
      ijin_mulai: DataTypes.DATE,
      ijin_berakhir: DataTypes.DATE,
      // 
      setuju_uk: DataTypes.DATE,
      putusan: DataTypes.STRING,
      kembali_tl:DataTypes.DATE,
      catatan: DataTypes.STRING,
      validation: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN,
      
    },
    {
      sequelize,
      modelName: 'Dinas',
    }
  );
  return Dinas;
};
