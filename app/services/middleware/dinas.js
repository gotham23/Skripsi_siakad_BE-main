const dinasRepo = require('../../repositories/dinas');

module.exports = {
    async getDinas(req){
        try {
            let dinas = await dinasRepo.find({id:  req.params.id})
            if(!dinas) return { error: 404, msg: "kegiatan tidak ditemukan" }
            if(dinas.deleted == true) return { error: 404, msg: "kegiatan tidak ditemukan" }
            req.dinas = dinas
            return {dinas}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}