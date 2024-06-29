// app.js

const express = require("express");
const app = express();
const session = require("express-session");
const authRouter = require("./routes/authRoute.js");
const userRouter = require("./routes/usersRoute.js");
const pejantanRouter = require("./routes/pejantanRoute.js");
const petugasRouter = require("./routes/petugasRoute.js");
const obatRouter = require("./routes/obatRoute.js");
const dataSapiRouter = require("./routes/dataSapiRoute.js");
const perkawinanRouter = require("./routes/perkawinanRoute.js");
const pkbRouter = require("./routes/pkbRoute.js");
const kelahiranRouter = require("./routes/kelahiranRoute.js");
const treatmentRouter = require("./routes/treatmentRoute.js");
const kematianRouter = require("./routes/kematianRoute.js");
const distribusiRouter = require("./routes/distribusiRoute.js");
const port = 3000;

// Konfigurasi middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(authRouter);

app.use(
  session({
    secret: "823ygi4ug0354g8hv34gyt23i44hg98y6h359gh8",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using https
  })
);

// Route untuk halaman login
// app.get("/", (req, res) => {
//   res.render("auth/loginpage", { error: null });
// });

// Route untuk halaman admin
app.get("/admin", (req, res) => {
  res.render("auth/admin");
});

// Route untuk halaman user
app.get("/user", (req, res) => {
  res.render("auth/users");
});

// Menggunakan  prefix '/api' untuk semua rute pengguna
app.use("/api", userRouter);
app.use("/api/pejantan", pejantanRouter);
app.use("/api/petugas", petugasRouter);
// app.use("/api", petugasRouter);
app.use("/api/obat", obatRouter);
app.use("/api/sapi", dataSapiRouter);
app.use("/api", perkawinanRouter);
app.use("/api", pkbRouter);
app.use("/api", kelahiranRouter);
app.use("/api", treatmentRouter);
app.use("/api", kematianRouter);
app.use("/api", distribusiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
