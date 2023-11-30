const activRepo = require('../repositories/activity');
const bcrypt = require('bcryptjs');
const jwtWeb = require('jsonwebtoken');
const dotenv = require('dotenv');
const jwt_decode = require('jwt-decode');
const { sendEmail } = require('./emailSender');

// const { sendEmail } = require('./emailSender');

dotenv.config();

module.exports = {
  async getAllActivity(req) {
    try {
      let activ = JSON.parse(JSON.stringify(await activRepo.findAll({ deleted: false })));
      return { activ };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getActivity(req) {
    try {
      let activ = JSON.parse(JSON.stringify(await activRepo.find({id: req.params.id,deleted: false,})));
      if (!activ) {
        return { error: 404, msg: 'aktifitas tidak ditemukan' };
      }
      return { activ };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async create(req) {
    let args = {
      name: req.body.kegiatan,
      s_activity: new Date(req.body.mulai),
      e_activity: new Date(req.body.selesai),
      deleted: false,
    };

    try {
      let activ = await activRepo.create(args);
      return { activ };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async update (req) {
      let args = {
        name: req.body.kegiatan,
        s_activity: new Date(req.body.mulai),
        e_activity: new Date(req.body.selesai),
        deleted: false,
      }
      try {
        let update = await activRepo.update(req.activ.id, args)
        return {update};
        
      } catch (error) {
        console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
      }
  },
  async deleteActivity (req) {
    try {
      let deleted = await activRepo.delete(req.activ.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
 
};
