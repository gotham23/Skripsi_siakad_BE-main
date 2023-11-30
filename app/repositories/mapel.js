const {Type_Mapels, Sequelize} = require('../models');
module.exports = {
    find(mapel){
        return Type_Mapels.findOne({
            where: {
                mapel: mapel
            } 
        })
    },
    findAll(){
        return Type_Mapels.findAll()
    },
    findId(id){
        return Type_Mapels.findOne({
            where: {id}
        })
    }
}