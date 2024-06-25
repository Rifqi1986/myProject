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



//.............................................DATA TERNAK.............





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

// DELETE data Birth by id database
app.delete("/delete-birth/:id", (req,res)=>{
  const idParams = req.params.id
  console.log(birthDb, "==> sebelum dihapus");
const result =  birthDb.filter(Element => Element.id != idParams)
console.log(result, "==> sesudah dihapus");
//res.status(202).json(result, "==> sesudah dihapus")
})


// .................................................................................UNTUK DISUSUN
// METHOD POST

// entri Data Ternak
app.post("/alldata", (reg,res)=>{
  res.status(200).json.send('Data berhasil disimpan ke Database');
})

  
// entri Data Kelahiran
app.post("/birth", (reg,res)=>{
      res.status(200).json.send('Data Kelahiran berhasil disimpan')
  })

  
// entri Data Kematian
app.post("/death", (reg,res)=>{
      res.status(200).send('Data kematian berhasil disimpan')
  })

// entri Data Penjualan
app.post("/sell", (reg,res)=>{
      res.status(200).send('Data penjualan berhasil disimpan')
  })

// entri Data Hibah
app.post("/hibah", (reg,res)=>{
  res.status(200).send('Data hibah berhasil disimpan')
})


// entri Data Pengukuran
app.post("/measure", (reg,res)=>{
  res.status(200).send('Data pengukuran berhasil disimpan')
})

// entri Data Pejantan
app.post("/bull", (reg,res)=>{
  res.status(200).send('Data berhasil disimpan')
})

// entri Data Pengobatan
app.post("/treat", (reg,res)=>{
  res.status(200).send('Data pengobatan berhasil disimpan')
})

// entri Data Obat
app.post("/drug", (reg,res)=>{
  res.status(200).send('Data berhasil disimpan')
})

// entri Data Perkawinan
app.post("/mating", (reg,res)=>{
  res.status(200).send('Data berhasil disimpan')
})

// entri Data Kebuntingan
app.post("/pragnant", (reg,res)=>{
  res.status(200).send('Data berhasil disimpan')
})


// entri Data Penanggulangan Reproduksi
app.post("/reprotreat", (reg,res)=>{
  res.status(200).send('Data berhasil disimpan')
})


//METHOD GET

// Show Data Ternak
app.get("/alldata", (reg,res)=>{
  res.status(200).json.send('ini adalah Database ternak');
})

  
// Show Data Kelahiran
app.get("/birth", (reg,res)=>{
      res.status(200).json.send('ini adalah Data kelahiran')
  })

  
// Show Data Kematian
app.get("/death", (reg,res)=>{
      res.status(200).send('ini adalah Data kematian')
  })

// Show Data Penjualan
app.get("/sell", (reg,res)=>{
      res.status(200).send('ini adalah Data penjualan')
  })

// Show Data Hibah
app.get("/hibah", (reg,res)=>{
  res.status(200).send('ini adalah Data hibah')
  })

// Show Data Pengukuran
app.get("/measure", (reg,res)=>{
  res.status(200).send('ini adalah Data pengukuran')
  })

// Show Data Pejantan
app.get("/bull", (reg,res)=>{
  res.status(200).send('ini adalah Data pejantan')
  })

// Show Data Pengobatan
app.get("/treat", (reg,res)=>{
  res.status(200).send('ini adalah Data pengobatan')
  })

// Show Data Obat
app.get("/drug", (reg,res)=>{
  res.status(200).send('ini adalah Data obat')
  })

// Show Data Perkawinan
app.get("/mating", (reg,res)=>{
  res.status(200).send('ini adalah Data perkawinan')
  })

// Show Data Kebuntingan
app.get("/pragnant", (reg,res)=>{
  res.status(200).send('ini adalah Data kebuntingan')
  })


// Show Data Penanggulangan Reproduksi
app.get("/reprotreat", (reg,res)=>{
  res.status(200).send('ini adalah Data penanggulangan Reproduksi')
  })

// METHOD PATCH

// Update Data Ternak
app.patch("/alldata", (reg,res)=>{
  res.status(200).json.send('ini adalah Database ternak');
  })

  
// Update Data Kelahiran
app.patch("/birth", (reg,res)=>{
      res.status(200).json.send('ini adalah Data kelahiran')
  })

  
// Update Data Kematian
app.patch("/death", (reg,res)=>{
      res.status(200).send('ini adalah Data kematian')
  })

// Update Data Penjualan
app.patch("/sell", (reg,res)=>{
      res.status(200).send('ini adalah Data penjualan')
  })

// Update Data Hibah
app.patch("/hibah", (reg,res)=>{
  res.status(200).send('ini adalah Data hibah')
  })

// Update Data Pengukuran
app.patch("/measure", (reg,res)=>{
  res.status(200).send('ini adalah Data pengukuran')
  })

// Update Data Pejantan
app.patch("/bull", (reg,res)=>{
  res.status(200).send('ini adalah Data pejantan')
  })

// Update Data Pengobatan
app.patch("/treat", (reg,res)=>{
  res.status(200).send('ini adalah Data pengobatan')
  })

// Update Data Obat
app.patch("/drug", (reg,res)=>{
  res.status(200).send('ini adalah Data obat')
  })

// Update Data Perkawinan
app.patch("/mating", (reg,res)=>{
  res.status(200).send('ini adalah Data perkawinan')
  })

// Update Data Kebuntingan
app.patch("/pragnant", (reg,res)=>{
  res.status(200).send('ini adalah Data kebuntingan')
  })


// Update Data Penanggulangan Reproduksi
app.patch("/reprotreat", (reg,res)=>{
  res.status(200).send('ini adalah Data penanggulangan Reproduksi')
  })


  //METHOD DELETE

// DELETE Data Ternak
app.delete("/alldata", (reg,res)=>{
  res.status(200).json.send('ini adalah Database ternak');
})

  
// DELETE Data Kelahiran
app.delete("/birth", (reg,res)=>{
      res.status(200).json.send('ini adalah Data kelahiran')
  })

  
// DELETE Data Kematian
app.delete("/death", (reg,res)=>{
      res.status(200).send('ini adalah Data kematian')
  })

// DELETE Data Penjualan
app.delete("/sell", (reg,res)=>{
      res.status(200).send('ini adalah Data penjualan')
  })

// DELETE Data Hibah
app.delete("/hibah", (reg,res)=>{
  res.status(200).send('ini adalah Data hibah')
  })

// DELETE Data Pengukuran
app.delete("/measure", (reg,res)=>{
  res.status(200).send('ini adalah Data pengukuran')
  })

// DELETE Data Pejantan
app.delete("/bull", (reg,res)=>{
  res.status(200).send('ini adalah Data pejantan')
  })

// DELETE Data Pengobatan
app.delete("/treat", (reg,res)=>{
  res.status(200).send('ini adalah Data pengobatan')
  })

// DELETE Data Obat
app.delete("/drug", (reg,res)=>{
  res.status(200).send('ini adalah Data obat')
  })

// DELETE Data Perkawinan
app.delete("/mating", (reg,res)=>{
  res.status(200).send('ini adalah Data perkawinan')
  })

// DELETE Data Kebuntingan
app.delete("/pragnant", (reg,res)=>{
  res.status(200).send('ini adalah Data kebuntingan')
  })


// DELETE Data Penanggulangan Reproduksi
app.delete("/reprotreat", (reg,res)=>{
  res.status(200).send('ini adalah Data penanggulangan Reproduksi')
  })

