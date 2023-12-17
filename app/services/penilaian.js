const dotenv = require('dotenv');
const penilaianRepo = require('../repositories/penilaian');
const mapelRepo = require('../repositories/mapel');
const siswaRepo = require('../repositories/siswa');



// const { sendEmail } = require('./emailSender');

dotenv.config();

module.exports = {


async getPenilaian(req) {
        try {
          let penilaian = JSON.parse(JSON.stringify(await penilaianRepo.findAll({id: req.params.id,deleted: false,})));
          if (!penilaian) {
            return { error: 404, msg: 'data tidak ditemukan' };
          }
          return { penilaian };
        } catch (error) {
          console.log(error);
          return { error: 400, msg: error ? error : 'Bad request server function' };
        }
      },
async create(req) {
  try {
  let args = {
    user_id: req.user.id,
    siswa_id: req.body.siswa_id,
    type: req.body.type,
    nilai: req.body.nilai,
    deleted: false,
  };
  let siswadt = await siswaRepo.findId(args.siswa_id);
  if (siswadt == null ){
    return {error: 404, msg: 'siswa tidak tersedia' }
  }
  let mapelType = await mapelRepo.findId(args.type);
    if (mapelType == null) {
      return { error: 404, msg: 'mata pelajaran tidak tersedia' };
    } 
  if (!req.body.nilai) {
    return {error: 404, msg: 'harap masukan nilai' }  
  } 
      let penilaian = await penilaianRepo.create(args);
      return { penilaian };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async update (req){
    let args = {
      user_id: req.user.id,
      siswa_id: req.body.siswa_id,
      type: req.body.type,
      nilai: req.body.nilai,
      deleted: false,
    };
    try {
      let update = await penilaianRepo.update(req.penilaian.id, args)
        return {update};
      
    } catch (error) {
      
    }
  },
  async deleteNilai (req) {
    try {
      let deleted = await penilaianRepo.delete(req.penilaian.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }

}
