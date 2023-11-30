'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gurus extends Model {
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
  Gurus.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // user_id: DataTypes.UUID,
      nama: DataTypes.STRING,
      nuptk: DataTypes.STRING,
      nbm: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      ttl: DataTypes.STRING,
      usia: DataTypes.INTEGER,
      th_masuk: DataTypes.INTEGER,
      th_masuk_bulan: DataTypes.STRING,
      status: DataTypes.STRING,
      jabatan: DataTypes.STRING,
      it_tk: DataTypes.STRING,
      it_sekolah: DataTypes.STRING,
      it_jurusan: DataTypes.STRING,
      it_tahun: DataTypes.INTEGER,
      mata_diklat: DataTypes.STRING,
      alamat: DataTypes.STRING,
      telp: DataTypes.STRING,
      jp_sd: DataTypes.STRING,
      jp_sd_th: DataTypes.INTEGER,
      jp_smp: DataTypes.STRING,
      jp_smp_th: DataTypes.INTEGER,
      jp_sma: DataTypes.STRING,
      jp_sma_th: DataTypes.INTEGER,
      jp_pt: DataTypes.STRING,
      jp_pt_th: DataTypes.INTEGER,
      sekolah_lain: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Gurus',
    }
  );
  return Gurus;
};
