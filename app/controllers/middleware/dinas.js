const midDinas = require('../../services/middleware/dinas');
module.exports = {

  getDinas(req, res, next) {
    midDinas.getDinas(req).then(data => {
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
