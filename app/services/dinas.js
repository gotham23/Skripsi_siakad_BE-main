const dinasRepo = require('../repositories/dinas');
const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const generatePDF = async (dinasData) => {
  let doc = new jsPDF();

  // Judul
  doc.setFontSize(20);
  doc.text('Surat Dinas', 105, 15, { align: 'center' });

  // Garis pemisah
  doc.setLineWidth(0.5);
  doc.line(20, 20, 190, 20);

  // Informasi Surat Dinas
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Nama: ${dinasData.name}`, 20, 30);
  doc.text(`Jabatan: ${dinasData.jabatan}`, 20, 40);
  doc.text(`Unit Kerja: ${dinasData.unit_kerja}`, 20, 50);
  doc.text(`Keperluan: ${dinasData.keperluan}`, 20, 60);
  doc.text(`Tanggal Mulai: ${dinasData.ijin_mulai}`, 20, 70);
  doc.text(`Tanggal Berakhir: ${dinasData.ijin_berakhir}`, 20, 80);
  doc.text(`Validation: ${dinasData.validation ? 'Sudah' : 'Belum'}`, 20, 90);

  // Tanda tangan dan tanggal
  doc.text('_____________________', 20, 130);
  doc.text('Tanda Tangan', 20, 135);
  doc.text('_____________________', 130, 130);
  doc.text('Tanggal', 130, 135);

  // Generate nama file PDF dengan UUID
  const pdfFileName = `SuratDinas_${uuidv4()}.pdf`;

  // Simpan file PDF ke dalam lokasi yang ditentukan
  const pdfFilePath = path.join(__dirname, '../../bin/public/pdf/', pdfFileName);

  try {
    fs.writeFileSync(pdfFilePath, doc.output());
    console.log('File PDF berhasil disimpan:', pdfFilePath);
    return { success: true, filePath: pdfFilePath };
  } catch (error) {
    console.error('Gagal menyimpan file PDF:', error);
    return { error: 500, msg: 'Gagal menyimpan file PDF' };
  }
};

module.exports = {
  generatePDF,

  async getAllDinasvalid(req) {
    try {
      let dinas = JSON.parse(JSON.stringify(await dinasRepo.findAllValid({ deleted: false, validation: true })));
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
    
  },

  async getDinas(req) {
try{
      let dinas = JSON.parse(JSON.stringify(await dinasRepo.find({id: req.params.id,deleted: false,})));
      if (!dinas) {
        return { error: 404, msg: 'data tidak ditemukan' };
      }
      const pdfFileName = await generatePDF(dinas);
      return { dinas, pdfFileName };
      
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
      console.log("Surat dinas berhasil dibuat");
      return { dinas };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },

  async update(req) {
    let args = {
      name: req.body.kegiatan,
      validation: false,
      deleted: false,
    }
    try {
      let update = await dinasRepo.update(req.dinas.id, args);
      console.log("Surat dinas berhasil diperbarui");
      return { update };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },

  async validationDinas(req) {
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
      console.log("Validasi surat dinas berhasil");
      return { valid };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  },

  async deleteDinas(req) {
    try {
      let deleted = await dinasRepo.delete(req.dinas.id);
      console.log("Surat dinas berhasil dihapus");
      return { deleted };
    } catch (error) {
      console.log(error);
      return { error: 400, msg: error ? error : 'Bad request server function' };
    }
  }
};
