/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */
const auths = require('./user');
const mail = require('./mails');
const activity = require('./activity');
const dinas = require('./dinas');
const guru = require('./guru');
const siswa = require('./siswa');

const penilaian = require('./penilaian');

module.exports = {
  auths,
  mail,
  activity,
  dinas,
  guru,
  siswa,
  penilaian
};
