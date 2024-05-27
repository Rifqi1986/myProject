const express = require("express")
const app = express()
const database = require("./auth.json")



// Konfigurasi middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// menjalankan ejs
app.set('view engine','ejs')

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

// Route untuk halaman registrasi
app.get('/register', (req, res) => {
    res.render('register');
  });
  
  // // Callback untuk registrasi
  app.post('/auth', (req, res) => {
    const{username, password} = req.body
    const lastItemPost = database[database.length -1].id
    const newIdPost = lastItemPost +1;

    const newPost = {
      id :newIdPost,
      username,password
    }

    database.push(newPost)
    res.status(400).json(database)

}); 

// Route untuk halaman Login
app.get('/login',(req,res) =>{
res.render('home')
});



// Callback untuk login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Validasi data (misalnya: pastikan tidak ada field yang kosong)
  if (!username || !password) {
    res.status(400).send('Semua field harus diisi.');
    return;
  }
  // Lakukan proses autentikasi (misalnya: cek username dan password)
  // Jika berhasil, redirect ke halaman home
  // Jika gagal, tampilkan pesan error
  // Contoh sederhana:
  if (username === 'username' && password === 'password') {
    res.render('home');
  } else {
    res.status(401).render('register');
  }
});


