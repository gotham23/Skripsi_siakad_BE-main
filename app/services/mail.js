const mailsRepo = require('../repositories/mail');
const bcrypt = require('bcryptjs');
const jwtWeb = require('jsonwebtoken');
const dotenv = require('dotenv');
const jwt_decode = require('jwt-decode');
const { sendEmail } = require('./emailSender');
const multer = require ("multer")

// const { sendEmail } = require('./emailSender');

dotenv.config();

const emails = (req, args) => {
  sendEmail(
    {
      
      text: args.text,
      isi : args.isi,
      lampiran: args.lampiran,
    },
    args.lampiran,
    'email-send',
    
    args.to,
    args.subject
  );
  console.log('terkirim');
};
module.exports = {
  async getAllMAil(req) {
    try {
      let mails = JSON.parse(JSON.stringify(await mailsRepo.findAll({ deleted: false })));
      return { mails };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getMail(req) {
    try {
      let mail = JSON.parse(JSON.stringify(await mailsRepo.find({id: req.params.id,deleted: false,})));
      if (!mail) {
        return { error: 404, msg: 'surat tidak ditemukan' };
      }
      return { mail };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async create(req) {
    let args = {
      to: req.body.kepada,
      subject: req.body.subjek,
      text: req.body.isi,
      lampiran: req.body.image,
      deleted: false,
    };

    try {
      if (!req.body.kepada) {
        return{error: 404, msg: 'harap masukan email penerima'}
      } else {
        emails(req, args);
        let mail = await mailsRepo.create(args);
        return { mail };
      }
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async update (req) {
      let args = {
        to: req.body.kepada,
      subject: req.body.subjek,
      text: req.body.isi,
      lampiran: req.body.image,
      deleted: false,
      }
      try {
        let update = await mailsRepo.update(req.params.id, args)
        emails(req, args);
        return {update};
        
      } catch (error) {
        console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
      }
  },
  async deleteMail (req) {
    try {
      let deleted = await mailsRepo.destroy({id: req.params.id});
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
 
};
