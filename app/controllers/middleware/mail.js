const midMail = require('../../services/middleware/mail');
module.exports = {
  createMailForm(req, res, next) {
    if (
      req.body.image == undefined) {
      console.log(req.body);
      res.status(403).json({ errors: ['field lampiran surat wajib diisi'] });
      return;
    }
    next();
  },
  updateMailForm(req, res, next) {
    if (
      req.body.kepada == undefined ||
       req.body.subjek == undefined ||
        req.body.image == undefined) {
        res.status(403).json({ errors: ["Semua field update surat wajib diisi"] })
        return
    }
    next()
},
  getMail(req, res, next) {
    midMail.getMail(req).then(data => {
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
