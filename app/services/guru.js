const guruRepo = require('../repositories/guru');
const dotenv = require('dotenv');


// const { sendEmail } = require('./emailSender');

dotenv.config();

module.exports = {
  async getAllGuru(req) {
    try {
      let guru = JSON.parse(JSON.stringify(await guruRepo.findAll({ deleted: false })));
      return { guru };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getAllGuruGender(req) {
    try {
      let guru = JSON.parse(JSON.stringify(await guruRepo.findAll({gender: req.query.gender,deleted: false })));
      return { guru };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getGuru(req) {
    try {
      let guru = JSON.parse(JSON.stringify(await guruRepo.find({id: req.params.id,deleted: false,})));
      if (!guru) {
        return { error: 404, msg: 'data tidak ditemukan' };
      }
      return { guru };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async create(req) {
    let args = {
      nama: req.body.nama,
      nuptk: req.body.nuptk,
      nbm: req.body.nbm,
      gender: req.body.gender,
      ttl: req.body.ttl,
      usia: req.body.usia,
      th_masuk: req.body.th_masuk,
      th_masuk_bulan: req.body.th_masuk_bulan,
      status: req.body.status,
      jabatan: req.body.jabatan,
      it_tk: req.body.it_tk,
      it_sekolah: req.body.it_sekolah,
      it_jurusan: req.body.it_jurusan,
      it_tahun: req.body.it_tahun,
      mata_diklat: req.body.mata_diklat,
      alamat: req.body.alamat,
      telp: req.body.telp,
      jp_sd: req.body.jp_sd,
      jp_sd_th: req.body.jp_sd_th,
      jp_smp: req.body.jp_smp,
      jp_smp_th: req.body.jp_smp_th,
      jp_sma: req.body.jp_sma,
      jp_sma_th: req.body.jp_sma_th,
      jp_pt: req.body.jp_pt,
      jp_pt_th: req.body.jp_pt_th,
      deleted: false,
    };
    try {
      let guru = await guruRepo.create(args);
      return { guru };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async update (req) {
      let args = {
      nama: req.body.nama,
      nuptk: req.body.nuptk,
      nbm: req.body.nbm,
      gender: req.body.gender,
      ttl: req.body.ttl,
      usia: req.body.usia,
      th_masuk: req.body.th_masuk,
      th_masuk_bulan: req.body.th_masuk_bulan,
      status: req.body.status,
      jabatan: req.body.jabatan,
      it_tk: req.body.it_tk,
      it_sekolah: req.body.it_sekolah,
      it_jurusan: req.body.it_jurusan,
      it_tahun: req.body.it_tahun,
      mata_diklat: req.body.mata_diklat,
      alamat: req.body.alamat,
      telp: req.body.telp,
      jp_sd: req.body.jp_sd,
      jp_sd_th: req.body.jp_sd_th,
      jp_smp: req.body.jp_smp,
      jp_smp_th: req.body.jp_smp_th,
      jp_sma: req.body.jp_sma,
      jp_sma_th: req.body.jp_sma_th,
      jp_pt: req.body.jp_pt,
      jp_pt_th: req.body.jp_pt_th,
      sekolah_lain: req.body.sekolah_lain,
      deleted: false,
      }
      try {
        let update = await guruRepo.update(req.guru.id, args)
        return {update};
        
      } catch (error) {
        console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
      }
  },
  async deleteGuru (req) {
    try {
      let deleted = await guruRepo.delete(req.guru.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
 
};
