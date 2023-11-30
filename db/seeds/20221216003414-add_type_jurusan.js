"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Type_Jurusan", [
      {
        jurusan: "LISTRIK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jurusan: "TKR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jurusan: "MEKATRONIK",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
