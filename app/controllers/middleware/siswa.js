const midSiswa = require('../../services/middleware/siswa');
module.exports = {
  getSiswa(req, res, next) {
    midSiswa.getSiswa(req).then(data => {
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
},
filterForm(req, res, next) {
    if (
        req.query.jurusan == undefined ||
        req.query.kelas == undefined) {
        console.log(req.query);
        res.status(403).json({ errors: ['Semua field tambah Kegiatan wajib diisi'] });
        return;
      }
      next();
},
};
