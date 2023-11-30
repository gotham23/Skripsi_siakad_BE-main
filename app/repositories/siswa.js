const { Op, where } = require('sequelize');
const { Siswas } = require('../models');

module.exports = {
  create(args) {
    return Siswas.create(args);
  },
  update(id, args) {
    return Siswas.update(args, {
        where: {
            id
        }
    })
},
  // Menggunakan metode soft delete
  delete(id) {
    return Siswas.update(
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
    return Siswas.findOne({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAll(argsWhere) {
    return Siswas.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findAllKelas(argsWhere) {
    return Siswas.findAll({ where: argsWhere, include: [{ all: true, nested: true }] });
  },
  findId(id){
    return Siswas.findOne({
        where: {id}
    })
}
};
