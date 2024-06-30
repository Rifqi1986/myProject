const userModel = require("../models/authModel");

class AuthController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userModel.getUserByUsername(username);

      if (!user) {
        return res.redirect("/login"); // Username tidak ditemukan
      }
      console.log(user);
      if (user.password !== password) {
        return res.redirect("/login"); // Password tidak sesuai atau kosong
      }

      let usernameDb = user.username;
      let roleDb = user.role;
      let fullNameDb = user.fullName;
      let emailDb = user.email;
      let passwordDb = user.password;
      let alamatDb = user.alamat;
      let no_tlpDb = user.no_tlp;
      let jabatanDb = user.jabatan;

      if (user.role === "admin") {
        return res.render("auth/admin", {
          fullName: fullNameDb,
          username: usernameDb,
          email: emailDb,
          password: passwordDb,
          role: roleDb,
          alamat: alamatDb,
          no_tlp: no_tlpDb,
          jabatan: jabatanDb,
        }); // Redirect ke halaman admin
      } else if (user.role === "user") {
        return res.render("auth/users", {
          fullName: fullNameDb,
          username: usernameDb,
          email: emailDb,
          password: passwordDb,
          role: roleDb,
          alamat: alamatDb,
          no_tlp: no_tlpDb,
          jabatan: jabatanDb,
        }); // Redirect ke halaman user
      } else {
        return res.redirect("/login"); // Role tidak ada
      }
    } catch (error) {
      console.error(error);
      return res.redirect("err"); // Kesalahan server
    }
  }

  static renderLogin(req, res) {
    // const fullName = "rifqi";
    res.render("auth/loginpage", { error: null });
  }

  static renderhomepage(req, res) {
    res.render("auth/users", { error: null });
  }

  static renderadmindash(req, res) {
    res.render("auth/admin", { error: null });
  }
}
module.exports = AuthController;
