'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gurus', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nama: {
        type: Sequelize.STRING,
      },
      nuptk: {
        type: Sequelize.STRING,
      },
      nbm: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      ttl: {
        type: Sequelize.STRING,
      },
      usia: {
        type: Sequelize.INTEGER,
      },
      th_masuk: {
        type: Sequelize.INTEGER,
      },
      th_masuk_bulan: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      jabatan: {
        type: Sequelize.STRING,
      },
      it_tk: {
        type: Sequelize.STRING,
      },
      it_sekolah: {
        type: Sequelize.STRING,
      },
      it_jurusan: {
        type: Sequelize.STRING,
      },
      it_tahun: {
        type: Sequelize.INTEGER,
      },
      mata_diklat: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      telp: {
        type: Sequelize.STRING,
      },
      jp_sd: {
        type: Sequelize.STRING,
      },
      jp_sd_th: {
        type: Sequelize.INTEGER,
      },
      jp_smp: {
        type: Sequelize.STRING,
      },
      jp_smp_th: {
        type: Sequelize.INTEGER,
      },
      jp_sma: {
        type: Sequelize.STRING,
      },
      jp_sma_th: {
        type: Sequelize.INTEGER,
      },
      jp_pt: {
        type: Sequelize.STRING,
      },
      jp_pt_th: {
        type: Sequelize.INTEGER,
      },
      sekolah_lain: {
        type: Sequelize.STRING,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gurus');
  },
};
