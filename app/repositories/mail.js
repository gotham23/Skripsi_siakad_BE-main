const { Op, where } = require('sequelize');
const { Mails } = require('../models');

module.exports = {
  create(args) {
    return Mails.create(args);
  },
  update(id, args) {
    return Mails.update(args, {
        where: {
            id
        }
    })
},
  // Menggunakan metode soft delete
  delete(id) {
    return Mails.update(
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
    return Mails.findOne({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAll(argsWhere) {
    return Mails.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
};
