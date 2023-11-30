const mapelRepo = require('../repositories/mapel');
module.exports = {
    async findAll(){
        return await mapelRepo.findAll()
    }
}