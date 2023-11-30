const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Penilaians, {
        foreignKey: 'siswa_id',
        as: 'raport',
      });
      // this.belongsTo(models.Type_Kelas, {
      //   foreignKey: 'kelas',
      //   as: 'kelas_siswa'
      // });
      // this.belongsTo(models.Type_Jurusan, {
      //   foreignKey: 'jurusan',
      //   as: 'jurusan_siswa'
      // })
    }
  }
  Siswas.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // user_id: DataTypes.UUID,
      nama: DataTypes.STRING,
      nis: DataTypes.STRING,
      nisn: DataTypes.STRING,
      no_kk: DataTypes.STRING,
      no_ijazah: DataTypes.STRING,
      jenis_kelamin: DataTypes.STRING,
      lhr_tempat: DataTypes.STRING,
      lhr_tbt: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      agama: DataTypes.STRING,
      alamat: DataTypes.STRING,
      ayah: DataTypes.STRING,
      no_ayah: DataTypes.STRING,
      ibu: DataTypes.STRING,
      no_ibu: DataTypes.STRING,
      kelas: DataTypes.STRING,
      jurusan: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Siswas',
    }
  );
  return Siswas;
};
