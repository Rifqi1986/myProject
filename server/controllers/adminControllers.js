

class authControler {
    static login (req,res){
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
    }
}
module.exports = authControler