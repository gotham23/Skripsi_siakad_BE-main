const midActivity = require('../../services/middleware/activity');
module.exports = {
  createActivityForm(req, res, next) {
    if (
      req.body.kegiatan == undefined ||
      req.body.mulai == undefined ||
      req.body.selesai == undefined) {
      console.log(req.body);
      res.status(403).json({ errors: ['Semua field tambah Kegiatan wajib diisi'] });
      return;
    }
    next();
  },
  updateActivityForm(req, res, next) {
    if (
        req.body.kegiatan == undefined ||
        req.body.mulai == undefined ||
        req.body.selesai == undefined) {
        res.status(403).json({ errors: ["Semua field update Kegiatan wajib diisi"] })
        return;
    }
    next()
},
  getActivity(req, res, next) {
    midActivity.getActivity(req).then(data => {
        if (data.error) {
            res.status(data.error).json({ errors: [data.msg] })
            return;
        } else {
            next()
        }
    }).catch(err => {
        res.status(400).json({ errors: [err] })
        return;
    })
}
};
