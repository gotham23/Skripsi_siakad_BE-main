const dinasService = require('../../../services/dinas');
const fs = require('fs');
const path = require('path');

module.exports = {
  getAllDinasvalid(req, res) {
    dinasService.getAllDinasvalid(req)
      .then(data => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => {
        res.status(400).json({ errors: [err] });
      });
  },

  getAllDinas(req, res) {
    dinasService.getAllDinas(req)
      .then(data => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => {
        res.status(400).json({ errors: [err] });
      });
  },

  getDinas(req, res) {
    dinasService.getDinas(req)
      .then(data => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          const { pdfFileName } = data;

          // Pastikan pdfFileName adalah string yang valid
          if (typeof pdfFileName !== 'string') {
            return res.status(500).json({ errors: ['File PDF tidak ditemukan'] });
          }

          const pdfPath = path.join(__dirname, '..', '..', 'public', 'pdf', pdfFileName);

          // Gunakan res.download untuk mengirim file PDF ke klien
          res.download(pdfPath, pdfFileName, (err) => {
            if (err) {
              console.error('Gagal mengirim file:', err);
              res.status(500).json({ errors: ['Internal Server Error'] });
            } else {
              console.log('File PDF berhasil dikirim:', pdfFileName);
            }
          });
        }
      })
      .catch(err => {
        console.error('Error saat mengambil surat dinas:', err);
        res.status(500).json({ errors: ['Internal Server Error'] });
      });
  },


  createDinas(req, res) {
    dinasService.create(req)
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
    dinasService.update(req)
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

  deleteDinas(req, res) {
    dinasService.deleteDinas(req)
      .then(data => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => {
        res.status(400).json({ errors: [err] });
      });
  },

  validationDinas(req, res) {
    dinasService.validationDinas(req)
      .then(data => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch(err => {
        res.status(400).json({ errors: [err] });
      });
  },
};
