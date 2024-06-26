'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nis: {
        type: Sequelize.STRING
      },
      nisn: {
        type: Sequelize.STRING
      },
      no_kk: {
        type: Sequelize.STRING
      },
      no_ijazah: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      lhr_tempat: {
        type: Sequelize.STRING
      },
      lhr_tbt: {
        type: Sequelize.DATE
      },
      no_telp: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      ayah: {
        type: Sequelize.STRING
      },
      no_ayah: {
        type: Sequelize.STRING
      },
      ibu: {
        type: Sequelize.STRING
      },
      no_ibu: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Siswas');
  }
};