const { Op, where } = require('sequelize');
const { Gurus } = require('../models');

module.exports = {
  create(args) {
    return Gurus.create(args);
  },
  update(id, args) {
    return Gurus.update(args, {
        where: {
            id
        }
    })
},
  // Menggunakan metode soft delete
  delete(id) {
    return Gurus.update(
      {
        deleted: true,
      },
      {
        where: { id },
      }
    );
  },
  find(argsWhere) {
    console.log(argsWhere);
    return Gurus.findOne({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAll(argsWhere) {
    return Gurus.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAllGender(argsWhere) {
    return Gurus.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
};
