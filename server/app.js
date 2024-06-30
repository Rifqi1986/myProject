// app.js

const express = require("express");
const app = express();
// const session = require("express-session");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(authRouter);

// Menggunakan  prefix '/api' untuk semua rute pengguna
app.use("/api/users", userRouter);
app.use("/api/pejantan", pejantanRouter);
app.use("/api/petugas", petugasRouter);
// app.use("/api", petugasRouter);
app.use("/api/obat", obatRouter);
app.use("/api/sapi", dataSapiRouter);
app.use("/api/perkawinan", perkawinanRouter);
app.use("/api/pkb", pkbRouter);
app.use("/api/kelahiran", kelahiranRouter);
app.use("/api/treatment", treatmentRouter);
app.use("/api/kematian", kematianRouter);
app.use("/api/distribusi", distribusiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
