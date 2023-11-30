const {Penilaians} = require('../models')

module.exports = {
    create(args){
        return Penilaians.create(args)
    },
    getDetail(args){ 
        return Penilaians.findOne({where: args})
    },
    delete(args){
        return Penilaians.delete({
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