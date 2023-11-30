const dinasRepo = require('../repositories/dinas');
const dotenv = require('dotenv');




dotenv.config();

const generate = (req) => {
    
    let doc = new jsPDF();
req.forEach(function(valid, i){
    doc.text(50, 10 + (i * 10), 
        
        "name: " + valid.name);
});
doc.save('Test.pdf');
};
module.exports = {
  async getAllDinasvalid(req) {
    try {
      let dinas = JSON.parse(JSON.stringify(await dinasRepo.findAllValid({ deleted: false, validation : true })));
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getAllDinas(req) {
    try {
      let dinas = JSON.parse(JSON.stringify(await dinasRepo.findAll({ deleted: false })));
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async getDinas(req) {
    try {
      let dinas = JSON.parse(JSON.stringify(await dinasRepo.find({id: req.params.id,deleted: false,})));
      generate(req);
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  async create(req) {
    let args = {
      name: req.body.kegiatan,
      jabatan: req.body.jabatan,
      unit_kerja: req.body.unit_kerja,
      keperluan: req.body.keperluan,
      ijin_mulai: req.body.ijin_mulai,
      ijin_berakhir: req.body.ijin_berakhir,
      validation: false,
      deleted: false,
    };

    try {
      let dinas = await dinasRepo.create(args);
      console.log("belum validasi")
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },
  
  async update (req) {
    let args = {
      name: req.body.kegiatan,
      validation: false,
      deleted: false,
    }
    try {
      let update = await dinasRepo.update(req.dinas.id, args)
      return {update};
      
    } catch (error) {
      console.log(error);
    return { error: 400, msg: error ? error : 'Bad request server function' };
    }
},
  async validationDinas (req) {
    let args = {
      setuju_uk: req.body.setuju_uk,
      putusan: req.body.putusan,
      kembali_tl: req.body.kembali_tl,
      catatan: req.body.catatan,
      validation: true,
      deleted: false,
    }
    try {
      
        let valid = await dinasRepo.validation(req.dinas.id, args);
        console.log("validasi berhasil")
        return { valid };
      } catch (error) {
        console.log(error);
        return { error: 400, msg: error ? error : 'Bad request server function' };
      }
    },
  async deleteDinas (req) {
    try {
      let deleted = await dinasRepo.delete(req.dinas.id);
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
  
 
};
