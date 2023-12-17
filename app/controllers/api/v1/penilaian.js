const penilaianService = require('../../../services/penilaian');

module.exports = {
  getPenilaian(req, res){
    penilaianService.getPenilaian(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    createPenilaian(req, res) {
      penilaianService
          .create(req)
          .then((data) => {
            if (data.error) {
              res.status(data.error).json({ errors: [data.msg] });
            } else {
              res.status(200).json(data);
            }
          })
          .catch((err) => {
            res.status(400).json({ errors: [err] });
          });
      },
      updatePenilaian(req, res) {
        penilaianService
          .update(req)
          .then((data) => {
            if (data.error) {
              res.status(data.error).json({ errors: [data.msg] });
            } else {
              res.status(200).json(data);
            }
          })
          .catch((err) => {
            res.status(400).json({ errors: [err] });
          });
      },
      deletePenilaian(req, res){
        penilaianService.deletePenilaian(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    }