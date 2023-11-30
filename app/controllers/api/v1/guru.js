const guruService = require('../../../services/guru');

module.exports = {
  getAllGuru(req, res){
    guruService.getAllGuru(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getAllGuruGender(req, res){
      guruService.getAllGuruGender(req).then(data => {
              if(data.error){
                  res.status(data.error).json({errors: [data.msg]})
              }else{
                  res.status(200).json(data)
              }
          }).catch(err => {
              res.status(400).json({errors: [err]})
          })
      },
    getGuru(req, res){
    guruService.getGuru(req).then(data => {
          if(data.error){
              res.status(data.error).json({errors: [data.msg]})
          }else{
              res.status(200).json(data)
          }
      }).catch(err => {
          res.status(400).json({errors: [err]})
      })
  },
  createGuru(req, res) {
    guruService
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
  updateGuru(req, res) {
    guruService
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
  deleteGuru(req, res){
    guruService.deleteGuru(req).then(data => {
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
