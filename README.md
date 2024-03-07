## Getting Started

Untuk mulai membuat sebuah implementasi dari HTTP Server, mulainya menginspeksi file [`app/index.js`](./app/index.js), dan lihatlah salah satu contoh `controller` yang ada di [`app/controllers/mainController.js`](./app/controllers/mainController.js)

Lalu untuk menjalankan development server, kalian tinggal jalanin salah satu script di package.json, yang namanya `develop`.

```sh
yarn develop
```

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir

- setelah berhasil login untuk pertama kali user mohon disarankan mengganti email, password dan foto

- salam FAhrez

- langkah localhost
1. `yarn db:create`, (membuat database)
2. `yarn db:migrate`, (migrate database)
3. `yarn db:seed`, (menambahkan data seeder)

## pastikan postgress sudah terhudubng ganti di di .env password nya dan namanya
- contoh
-  DB_USERNAME = postgres
-  DB_PASSWORD = maryam23 (sesuaikan password)
-  DB_HOST = 127.0.0.1
-  DB_NAME = railway2     (sesuaikan)
-  DB_PORT = 5432         (sesuaikan)
-  API_URL = http://localhost:3000 (sesuaikan)

### Contoh Login
## ADMIN
- Admin username : admin,
- admin pass : admin,
## USER
- user username : Pahri,
- user pass : admin,

## UNTUK RUNNING
- yarn develop