const mailRepo = require('../../repositories/mail');

module.exports = {
    async getMail(req){
        try {
            let mail = await mailRepo.find({id:  req.params.id})
            if(!mail) return { error: 404, msg: "surat tidak ditemukan" }
            if(mail.deleted == true) return { error: 404, msg: "surat tidak ditemukan" }
            req.mail = mail
            return {mail}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}