const { login, register, forgotPass, isLogin, isAdmin, getUser, updateUser, verifyRegister, verifyResetPass } = require('./user');
const { createMailForm, getMail, updateMailForm } = require('./mail');
const { createActivityForm, getActivity, updateActivityForm } = require('./activity');
const {  getDinas} = require('./dinas');
const {  getGuru,updateGuruForm} = require('./guru');
const { uploadHandler } = require('./fileHandler');
const { filterForm } = require('./siswa');

module.exports = {
  login,
  register,
  forgotPass,
  isLogin,
  isAdmin,
  getUser,
  updateUser,
  uploadHandler,
  verifyRegister,
  verifyResetPass,
  createMailForm,
  getMail,
  updateMailForm,
  createActivityForm,
  getActivity, 
  updateActivityForm,
  getDinas,
  updateGuruForm,
  getGuru,
  filterForm
};
