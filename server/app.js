const express = require("express")
const app = express()
const userDb = require("./database/userDb.json")
const birthDb = require("./database/birthDb.json")
const adminControllers = require("./controllers/adminControllers")



// Konfigurasi middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// menjalankan ejs
app.set('view engine','ejs')

// Jalankan server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});


//.............................................REGISTRASI USER.............

// Route untuk halaman registrasi
app.get('/register', (req, res) => {
    res.render('register');
  });
  
  // POST data USER ke database dengan id autoincrement
  app.post('/post-register', (req, res) => {
    const{username, password} = req.body
    const lastUser = userDb[userDb.length -1].id
    const newIdUser = lastUser +1;

    const newUser = {
      id :newIdUser,
      username,password
    }

    dbUser.push(newUser)
    console.log(newUser)
    res.status(400).json(userDb)

}); 

// GET All data USER dari Database
app.get("/get-userData", (req,res)=>{
  console.log(userDb, "==> Terpanggil semua userData");
  res.status(200).json(userDb)
})

// GET data USER by id dari database
app.get("/get-userData/:id", (req,res)=>{
  const idParams = req.params.id // memanggil id harus gunakan req.params
  console.log(userDb, "==> terpanggil semuanya");

  let tampStrings = ""
    userDb.forEach (Element => {
      if (idParams == Element.id) {
           tampStrings = Element.username

      
    }
  })
  console.log(tampStrings, "==> terpanggil sesuai Id");
  res.status(200).json(tampStrings)
})


// UPDATE data USER by id database

app.patch("/patch-userData/:id", (req,res)=>{
  const idParams = req.params.id
  const {username, password} = req.body
  console.log(userDb, "==> sebelum di Update");

  for (let index = 0; index < userDb.length; index++) {
       if (userDb[index].id == idParams) {
        userDb[index].username = username
       }
  }
  console.log(userDb, "setelah di Update");
  res.status(200).json(userDb)
});

// DELETE data USER by id database
app.delete("/delete-userData/:id", (req,res)=>{
  const idParams = req.params.id
  console.log(userDb, "==> sebelum dihapus");
const result =  userDb.filter(Element => Element.id != idParams)
console.log(result, "==> sesudah dihapus");
//res.status(202).json(result, "==> sesudah dihapus")
})


// Route untuk halaman Login
app.get('/login',(req,res) =>{
res.render('home')
});

app.get("/hello", (req, res) => {
  res.status(200).json('hello world')
})






// Callback untuk login
app.post('/login', (adminControllers) => {
});



//.............................................KELAHIRAN.............

  // POST data BIRTH ke database dengan id autoincrement
  app.post('/post-birth', (req, res) => {
    const{eartagInduk, tglPartus, jkAnak, kondisiAnak, kondisiInduk} = req.body
    console.log(birthDb, "==> Sebelum ditambahkan");
    const lastData = birthDb[birthDb.length -1].id
    const newIdData = lastData +1;

    const newData = {
      id :newIdData,
      eartagInduk, tglPartus, jkAnak, kondisiAnak, kondisiInduk
    }

    birthDb.push(newData)
    console.log(birthDb, "==> Setelah ditambahkan")
    res.status(400).json(birthDb)

}); 

// GET All data BIRTH dari Database
app.get("/get-birth", (req,res)=>{
  console.log(birthDb, "==> Terpanggil semua dari database");
  res.status(200).json(birthDb)
})

// GET data BIRTH by id dari database
app.get("/get-birth/:id", (req,res)=>{
  const idParams = req.params.id // memanggil id harus gunakan req.params
  console.log(birthDb, "==> terpanggil semuanya");

  let tampStrings = ""
    birthDb.forEach (Element => {
      if (idParams == Element.id) {
           tampStrings = Element.eartagInduk   
    }
  })

  console.log(tampStrings, "==> terpanggil sesuai Id");
  res.status(200).json(tampStrings)
})


// UPDATE data Birth by id database

app.patch("/patch-birth/:id", (req,res)=>{
  const idParams = req.params.id
  const {eartagInduk, tglPartus, jkAnak, kondisiAnak, kondisiInduk} = req.body
  console.log(birthDb, "==> sebelum di Update");

  for (let index = 0; index < birthDb.length; index++) {
       if (birthDb[index].id == idParams) {
        birthDb[index].eartagInduk = eartagInduk
       }
  }
  console.log(birthDb, "setelah di Update");
  res.status(200).json(birthDb)
});

// DELETE data USER by id database
app.delete("/delete-birth/:id", (req,res)=>{
  const idParams = req.params.id
  console.log(birthDb, "==> sebelum dihapus");
const result =  birthDb.filter(Element => Element.id != idParams)
console.log(result, "==> sesudah dihapus");
//res.status(202).json(result, "==> sesudah dihapus")
})


