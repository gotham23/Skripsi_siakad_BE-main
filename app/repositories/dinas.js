const { Op, where } = require('sequelize');
const { Dinas } = require('../models');

module.exports = {
  create(args) {
    return Dinas.create(args);
  },
  update(id, args) {
    return Dinas.update(args, {
        where: {
            id
        }
    })
},
  // Menggunakan metode soft delete
  delete(id) {
    return Dinas.update(
      {
        deleted: true,
      },
      {
        where: { id },
      }
    );
  },
  validation(id,args) {
    return Dinas.update(args, {
      where: {
          id
      }
  })
},

find(argsWhere) {
  return Dinas.findOne({ where: argsWhere, include: [{ all: true, nested: true }] });
},
  findAll(argsWhere) {
    return Dinas.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAllValid(argsWhere) {
    return Dinas.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
};
