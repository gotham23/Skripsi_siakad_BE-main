const request = require('supertest')
const env = require('dotenv').config()
const api = request(process.env.API_URL)

const login = () => api.post('/api/v1/login').send({
    username: "admin",
    password: "admin"
}).set('Accept', 'application/json')

const matchers  = require('jest-json-schema').matchers;
expect.extend(matchers);

// Skema validator
const schemaUser = {
    type: "object",
    default: {},
    title: "Root Schema",
    required: ["token", "user"],
    properties: {
      token: {
        type: "string",
        default: "",
        title: "The token Schema",
        examples: [
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMjM1NzRiOGYtM2U4OS00Njg1LWEzNDgtNjdjMWY3ZTViM2M0IiwiaWF0IjoxNjk4MzE3NTI5fQ.Uy6OqHUmefonPpLyHr3aJTx-QH2KLSPqFyRPripKl_E"
        ]
      },
      user: {
        type: "object",
        default: {},
        title: "The user Schema",
        required: [
          "id",
          "username",
          "email",
          "password",
          "g_id",
          "f_name",
          "l_name",
          "active",
          "access_level",
          "deleted",
          "photo",
          "createdAt",
          "updatedAt",
          "penilaian"
        ],
        properties: {
          siswa: {
            type: "object",
            title: "The siswa Schema",
            required: [
              "id",
              "nama",
              "nis",
            ],
            properties: {
              // ... siswa properties ...
            }
          },
          mapel: {
            type: "object",
            title: "The mapel Schema",
            required: ["id", "mapel", "createdAt", "updatedAt"],
            properties: {
              // ... mapel properties ...
            }
          }
        }
      }
    }
  };

// requesst dan validate respect
describe('Endpoint login', () => {
    test('Endpoint login berstatus 200', async () => {
        try {
            const response = await login()
            expect(response.status).toEqual(200)
            expect(response.body).toMatchSchema(schemaUser)
        } catch (error) {
           console.log("test gagal")
            throw error;
        }
    })
})