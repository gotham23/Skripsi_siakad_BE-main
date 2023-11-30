const mailService = require('../../../services/mail');

module.exports = {
  getAllMail(req, res){
    mailService.getAllMAil(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getMail(req, res){
      mailService.getMail(req).then(data => {
          if(data.error){
              res.status(data.error).json({errors: [data.msg]})
          }else{
              res.status(200).json(data)
          }
      }).catch(err => {
          res.status(400).json({errors: [err]})
      })
  },
  createMail(req, res) {
    mailService
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
  updateMail(req, res) {
    mailService
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
  deleteMail(req, res){
    mailService.deleteMail(req).then(data => {
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
