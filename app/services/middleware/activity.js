const activityRepo = require('../../repositories/activity');

module.exports = {
    async getActivity(req){
        try {
            let activ = await activityRepo.find({id:  req.params.id})
            if(!activ) return { error: 404, msg: "kegiatan tidak ditemukan" }
            if(activ.deleted == true) return { error: 404, msg: "kegiatan tidak ditemukan" }
            req.activ = activ
            return {activ}
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}