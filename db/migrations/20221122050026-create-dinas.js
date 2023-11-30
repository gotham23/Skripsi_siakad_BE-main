'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dinas', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      jabatan :  {
        type: Sequelize.STRING,
      },
      unit_kerja: {
        type: Sequelize.STRING,
      },
      keperluan: {
        type: Sequelize.STRING,
      },
      ijin_mulai: {
        type: Sequelize.DATE,
      },
      ijin_berakhir: {
        type: Sequelize.DATE,
      },
      setuju_uk: {
        type: Sequelize.DATE,
      },
      putusan: {
        type: Sequelize.STRING,
      },
      kembali_tl:{
        type: Sequelize.DATE,
      },
      catatan: {
        type: Sequelize.STRING,
      },
      validation: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Dinas');
  },
};
