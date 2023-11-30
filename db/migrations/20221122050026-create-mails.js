'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mails', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      // user_id: {
      //   type: Sequelize.UUID,
      // },
      to: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      lampiran:{
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
    await queryInterface.dropTable('Mails');
  },
};
