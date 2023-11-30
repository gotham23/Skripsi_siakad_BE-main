const { Op, where } = require('sequelize');
const { Activities } = require('../models');

module.exports = {
  create(args) {
    return Activities.create(args);
  },
  update(id, args) {
    return Activities.update(args, {
        where: {
            id
        }
    })
},
  // Menggunakan metode soft delete
  delete(id) {
    return Activities.update(
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
    return Activities.findOne({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAll(argsWhere) {
    return Activities.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
};
