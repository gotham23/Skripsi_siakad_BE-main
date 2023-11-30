const GuruRepo = require('../../repositories/guru');

module.exports = {
    async getGuru(req){
        try {
            let guru = await GuruRepo.find({id:  req.params.id})
            if(!guru) return { error: 404, msg: "data tidak ditemukan" }
            if(guru.deleted == true) return { error: 404, msg: "data tidak ditemukan" }
            req.guru = guru
            return {guru}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}