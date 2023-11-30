const siswaService = require('../../../services/siswa');

module.exports = {
  getAllSiswa(req, res){
    siswaService.getAllSiswa(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getSiswa(req, res){
    siswaService.getSiswa(req).then(data => {
          if(data.error){
              res.status(data.error).json({errors: [data.msg]})
          }else{
              res.status(200).json(data)
          }
      }).catch(err => {
          res.status(400).json({errors: [err]})
      })
  },
  getAllSiswaKelas(req, res){
    siswaService.getAllSiswaKelas(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
  createSiswa(req, res) {
    siswaService
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
  updateSiswa(req, res) {
    siswaService
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
  deleteSiswa(req, res){
    siswaService.deleteSiswa(req).then(data => {
        if(data.error){
            res.status(data.error).json({errors: [data.msg]})
        }else{
            res.status(200).json(data)
        }
    }).catch(err => {
        res.status(400).json({errors: [err]})
    })
},
filter(req, res){
  siswaService.filterSiswa(req).then(data => {
      if(data.error){
          res.status(data.error).json({errors: [data.msg]})
      }else{
          res.status(200).json(data)
      }
  }).catch(err => {
      res.status(400).json({errors: [err]})
  })
},
};
