const activityService = require('../../../services/activity');

module.exports = {
  getAllActivity(req, res){
    activityService.getAllActivity(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getActivity(req, res){
    activityService.getActivity(req).then(data => {
          if(data.error){
              res.status(data.error).json({errors: [data.msg]})
          }else{
              res.status(200).json(data)
          }
      }).catch(err => {
          res.status(400).json({errors: [err]})
      })
  },
  createActivity(req, res) {
    activityService
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
  updateActivity(req, res) {
    activityService
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
  deleteActivity(req, res){
    activityService.deleteActivity(req).then(data => {
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
