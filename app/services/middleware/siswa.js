const SiswaRepo = require('../../repositories/siswa');

module.exports = {
    async getSiswa(req){
        try {
            let siswa = await SiswaRepo.find({id:  req.params.id})
            if(!siswa) return { error: 404, msg: "data tidak ditemukan" }
            if(siswa.deleted == true) return { error: 404, msg: "data tidak ditemukan" }
            req.siswa = siswa
            return {siswa}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}