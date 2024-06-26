const {Penilaians} = require('../models')

module.exports = {
    create(args){
        return Penilaians.create(args)
    },
    getDetail(args){ 
        return Penilaians.findOne({where: args})
    },
    update(id, args) {
        return Penilaians.update(args, {
          where: { id }
        });
      },
    destroy(args){
        return Penilaians.destroy({
            where: args
        })
    },
    findAll(args) {
        return Penilaians.findAll({
          where: args,
          include: [{ all: true, nested: true }]
        });
      },
}