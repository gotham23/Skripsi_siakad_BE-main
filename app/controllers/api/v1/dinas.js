const dinasService = require('../../../services/dinas');

module.exports = {
  getAllDinasvalid(req, res){
    dinasService.getAllDinasvalid(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
  getAllDinas(req, res){
    dinasService.getAllDinas(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getDinas(req, res){
    dinasService.getDinas(req).then(data => {
          if(data.error){
              res.status(data.error).json({errors: [data.msg]})
          }else{
              res.status(200).json(data)
          }
      }).catch(err => {
          res.status(400).json({errors: [err]})
      })
  },
  createDinas(req, res) {
    dinasService
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
  updateDinas(req, res) {
    dinasService
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
  deleteDinas(req, res){
    dinasService.deleteDinas(req).then(data => {
        if(data.error){
            res.status(data.error).json({errors: [data.msg]})
        }else{
            res.status(200).json(data)
        }
    }).catch(err => {
        res.status(400).json({errors: [err]})
    })
},
validationDinas(req, res){
    dinasService.validationDinas(req).then(data => {
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
