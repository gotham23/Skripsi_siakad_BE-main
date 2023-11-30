const express = require('express');
const ctrl = require('../app/controllers');
const { uploadUser, uploadMail } = require("../app/controllers/middleware/upload");
const path = require('path');
// const { uploadUser } = require('../app/controllers/middleware/upload');
// const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');

// const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));

const apiRouter = express.Router();

apiRouter.use(cors());

apiRouter.use(express.static(path.join(__dirname, '../bin/public')));
// apiRouter.use('/', swaggerUi.serve);
// apiRouter.get('/', swaggerUi.setup(swaggerDocument));
/**
 * TODO: Implement your own API
 *       implementations
 */

////route umum
apiRouter.post('/api/v1/login', ctrl.middleware.login, ctrl.api.v1.auths.login);
apiRouter.get('/api/v1/who-am-i', ctrl.middleware.isLogin, ctrl.api.v1.auths.whoAmI);
apiRouter.put('/api/v1/update-profile', ctrl.middleware.isLogin, uploadUser.single('image'), ctrl.middleware.uploadHandler, ctrl.middleware.updateUser, ctrl.api.v1.auths.updateProfile);

// apiRouter.post('/api/v1/login', ctrl.middleware.login, ctrl.api.v1.auths.login);
// apiRouter.post('/api/v1/register', ctrl.middleware.register, ctrl.api.v1.auths.register);

// apiRouter.post('/api/v1/register', ctrl.middleware.auths.register, ctrl.api.v1.auths.register);

apiRouter.get('/api/v1/guru',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.guru.getAllGuru);///umum
//// route Admin surat keluar
apiRouter.get('/api/v1/mails',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.mail.getAllMail);
apiRouter.get('/api/v1/:id/mail',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.mail.getMail);
apiRouter.post('/api/v1/mail',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, uploadMail.single('image'), ctrl.middleware.uploadHandler, ctrl.api.v1.mail.createMail);
apiRouter.put('/api/v1/mail/:id/update',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getMail, ctrl.middleware.updateMailForm, ctrl.api.v1.mail.updateMail);
apiRouter.delete("/api/v1/mail/:id/delete", ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getMail, ctrl.api.v1.mail.deleteMail)

//// route umum surat dinas '
apiRouter.get('/api/v1/dinas',ctrl.middleware.isLogin, ctrl.api.v1.dinas.getAllDinas);
apiRouter.get('/api/v1/:id/dinas',ctrl.middleware.isLogin, ctrl.api.v1.dinas.getDinas);
apiRouter.get('/api/v1/valid',ctrl.middleware.isLogin, ctrl.api.v1.dinas.getAllDinasvalid);
apiRouter.delete('/api/v1/dinas/:id/delete',ctrl.middleware.isLogin,ctrl.middleware.getDinas, ctrl.api.v1.dinas.deleteDinas);
//// route surat dinas guru'
apiRouter.post('/api/v1/dinas',ctrl.middleware.isLogin, ctrl.api.v1.dinas.createDinas);
//// route surat dinas admin'
apiRouter.put('/api/v1/dinas/:id/validation',ctrl.middleware.isLogin,ctrl.middleware.getDinas, ctrl.api.v1.dinas.validationDinas);


//// route Admin jadwal kegiatan
apiRouter.get('/api/v1/activ',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.activity.getAllActivity);
apiRouter.get('/api/v1/:id/activ',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.activity.getActivity);
apiRouter.post('/api/v1/activ',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.createActivityForm, ctrl.api.v1.activity.createActivity);
apiRouter.put('/api/v1/activ/:id/update',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getActivity, ctrl.api.v1.activity.updateActivity);
apiRouter.delete("/api/v1/activ/:id/delete", ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getActivity, ctrl.api.v1.activity.deleteActivity)

//// route Admin data guru

apiRouter.post('/api/v1/guru',ctrl.middleware.isLogin, ctrl.middleware.isAdmin,  ctrl.api.v1.guru.createGuru);
apiRouter.get('/api/v1/:id/guru',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.guru.getGuru);
apiRouter.put('/api/v1/guru/:id/update',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getGuru, ctrl.api.v1.guru.updateGuru);
apiRouter.delete("/api/v1/guru/:id/delete", ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getGuru, ctrl.api.v1.guru.deleteGuru)

/// route Admin data siswa
apiRouter.post('/api/v1/siswa',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.siswa.createSiswa);
apiRouter.put('/api/v1//:id/siswa',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.siswa.updateSiswa);
apiRouter.delete('/api/v1/:id/siswa',ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.api.v1.siswa.deleteSiswa);
apiRouter.get('/api/v1/siswa/kelas',ctrl.middleware.isLogin, ctrl.api.v1.siswa.getAllSiswaKelas);
apiRouter.get('/api/v1/siswa',ctrl.middleware.isLogin, ctrl.api.v1.siswa.getAllSiswa);
apiRouter.get("/api/v1/filter-siswa", ctrl.middleware.isLogin, ctrl.middleware.filterForm, ctrl.api.v1.siswa.filter)
// route  nilai guru
apiRouter.post('/api/v1/penilaian',ctrl.middleware.isLogin, ctrl.api.v1.penilaian.createPenilaian);
apiRouter.get('/api/v1/:id/penilaian',ctrl.middleware.isLogin, ctrl.api.v1.penilaian.getPenilaian);

// route  penilaian guru


//===================================== Route verifikasi =====================================
apiRouter.post("/api/v1/reset-password", ctrl.middleware.forgotPass, ctrl.api.v1.auths.forgotPassword)
apiRouter.get("/api/v1/:email/verify-reset-password", ctrl.middleware.verifyResetPass, ctrl.api.v1.auths.verifyForgotPass);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get('/api/v1/errors', () => {
  throw new Error('The Industrial Revolution and its consequences have been a disaster for the human race.');
});

apiRouter.use(ctrl.api.main.onLost);
apiRouter.use(ctrl.api.main.onError);

module.exports = apiRouter;
