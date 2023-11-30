const {Type_Kelas, Sequelize} = require('../models');
module.exports = {
    find(kelas){
        return Type_Kelas.findOne({
            where: {
                kelas: kelas
            } 
        })
    },
    findAll(){
        return Type_Kelas.findAll()
    },
    findId(id){
        return Type_Kelas.findOne({
            where: {id}
        })
    }
}