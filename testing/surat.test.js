const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.API_URL);

const mail = () =>
  api.post('/api/v1/mail').set('x-access-token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZDk0MDcyZDktMDg2Yy00MjlmLTg0MmMtMjdkMDg0NGVlODExIiwiaWF0IjoxNjcyMjc5Njc5fQ.2pO20pta3-JIygEHaVT2XSitVTIO4KKAIgUAB83UaxE').send({
    kepada: 'fikrifahresi@gmail.com',
    subjek: 'surat sekolah',
    isi: 'hallo admin',
    Image: '/mail/_image_1698633783576_592368481.jpg'
  });

const matchers = require('jest-json-schema').matchers;
expect.extend(matchers);

const schemaMail = {
    type: 'object',
    default: {},
    title: 'Root Schema',
    required: ['token', 'user'],
    properties: {
      token: {
        type: 'string',
        default: '',
        title: 'The token Schema',
        examples: [
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMjM1NzRiOGYtM2U4OS00Njg1LWEzNDgtNjdjMWY3ZTViM2M0IiwiaWF0IjoxNjk4MzE3NTI5fQ.Uy6OqHUmefonPpLyHr3aJTx-QH2KLSPqFyRPripKl_E',
        ],
      },
      mail: {
        type: 'object',
        default: {},
        title: 'The mail Schema',
        required: [
          'id',
          'kepada',
          'subjek',
          'isi',
          'image',
          'deleted',
          'createdAt',
          'updatedAt',
        ],
      },
    },
  };
  
  // requesst dan validate respect
  describe('Endpoint mail', () => {
    test('Endpoint mail berstatus 200', async () => {
      try {
        const response = await mail();
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schemaMail);
      } catch (error) {
        console.log('test gagal');
        throw error;
      }
    });
  });