const express = require("express")
const app = express()
const database = require("./database/auth.json")
const adminControllers = require("./controllers/adminControllers")



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
  
  // POST data ke database dengan id autoincrement
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

// GET All data dari Database
app.get("/auth", (req,res)=>{
  res.status(200).json(database)
})

// GET data by id dari database
app.get("/auth/:id", (req,res)=>{
  const idParams = req.params.id // memanggil id harus gunakan req.params

  let tampStrings =""
    database.forEach (Element => {
      if (idParams == Element.id) {
        tampStrings = Element.username

      
    }
  })
  res.status(200).json(tampStrings)
})


// UPDATE data by id database

// GET data by id dari database
app.patch("/auth/:id", (req,res)=>{
  const idParams = req.params.id
  const {username, password} = req.body

  for (let index = 0; index < database.length; index++) {
       if (database[index].id == idParams) {
        database[index].username = username
       }
  }
  res.status(200).json(database)
});

// DELETE data by id database
app.delete("/auth/:id", (req,res)=>{
  const idParams = req.params.id
const result =  database.filter(Element => Element.id != idParams)
res.status(202).json(result)
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


