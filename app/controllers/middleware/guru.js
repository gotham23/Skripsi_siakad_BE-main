const midGuru = require('../../services/middleware/guru');
module.exports = {
  // createGuruForm(req, res, next) {
  //   if (
  //     req.body.kegiatan == undefined ||
  //      req.body.mulai == undefined |
  //        req.body.selesai == undefined) {
  //     console.log(req.body);
  //     res.status(403).json({ errors: ['Semua field tambah Kegiatan wajib diisi'] });
  //     return;
  //   }
  //   next();
  // },
//   updateGuruForm(req, res, next) {
    
//     next()
// },
  getGuru(req, res, next) {
    midGuru.getGuru(req).then(data => {
        if (data.error) {
            res.status(data.error).json({ errors: [data.msg] })
            return
        } else {
            next()
        }
    }).catch(err => {
        res.status(400).json({ errors: [err] })
        return
    })
}
};
