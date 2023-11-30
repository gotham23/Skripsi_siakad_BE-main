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
    await queryInterface.bulkInsert("Type_Mapels", [
      {
        mapel: "PENDIDIKAN AGAMA DAN BUDI PEKERTI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "BAHASA INDONESIA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "SEJARAH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "SENI BUDAYA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "PJOK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "KEMUHAMMADIYAHAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "BAHASA ARAB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "MATEMATIKA KEJURUAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "INFORMATIKA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mapel: "PROYEK IPAS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
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
