
const siswaRepo = require('../repositories/siswa');
const dotenv = require('dotenv');


// const { sendEmail } = require('./emailSender');

dotenv.config();

module.exports = {
  async getAllSiswa(req) {
    try {
      let siswa = JSON.parse(JSON.stringify(await siswaRepo.findAll({ deleted: false })));
      return { siswa };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getSiswa(req) {
    try {
      let siswa = JSON.parse(JSON.stringify(await siswaRepo.find({id: req.params.id,deleted: false,})));
      if (!siswa) {
        return { error: 404, msg: 'data tidak ditemukan' };
      }
      return { siswa };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getAllSiswaKelas(req) {
    try {
      let siswa = JSON.parse(JSON.stringify(await siswaRepo.findAll({deleted: false,})));
      if (!siswa) {
        return { error: 404, msg: 'data tidak ditemukan' };
      }
      return { siswa };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async create(req) {
    let args = {
      nama: req.body.nama,
      nis: req.body.nis,
      nisn: req.body.nisn,
      no_kk: req.body.no_kk,
      no_ijazah: req.body.no_ijazah,
      jenis_kelamin: req.body.jenis_kelamin,
      lhr_tempat: req.body.lhr_tempat,
      lhr_tbt: req.body.lhr_tbt,
      no_telp: req.body.no_telp,
      agama: req.body.agama,
      alamat: req.body.alamat,
      ayah: req.body.ayah,
      no_ayah: req.body.no_ayah,
      ibu: req.body.ibu,
      no_ibu: req.body.no_ibu,
      kelas: req.body.kelas,
      jurusan: req.body.jurusan,
      deleted: false,
    };
    try {
      let siswa = await siswaRepo.create(args);
      return { siswa };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async update (req) {
      let args = {
        nama: req.body.nama,
        nis: req.body.nis,
        nisn: req.body.nisn,
        no_kk: req.body.no_kk,
        no_ijazah: req.body.no_ijazah,
        jenis_kelamin: req.body.jenis_kelamin,
        lhr_tempat: req.body.lhr_tempat,
        lhr_tbt: req.body.lhr_tbt,
        no_telp: req.body.no_telp,
        agama: req.body.jabagamaatan,
        alamat: req.body.alamat,
        ayah: req.body.ayah,
        no_ayah: req.body.no_ayah,
        ibu: req.body.ibu,
        no_ibu: req.body.no_ibu,
        kelas: req.body.kelas,
        jurusan: req.body.jurusan,
        deleted: false,
      }
      try {
        let update = await siswaRepo.update(req.siswa.id, args)
        return {update};
        
      } catch (error) {
        console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
      }
  },
  async deleteSiswa (req) {
    try {
      let deleted = await siswaRepo.delete(req.siswa.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async filterSiswa(req) {
    let args = {
      jurusan: req.query.jurusan,
      kelas :  req.query.kelas,
      deleted: false,
    };
    try {
      siswa = JSON.parse(JSON.stringify(await siswaRepo.findAll(args)));
      return {siswa};
    } catch (error) { 
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
};
