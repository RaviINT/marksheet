const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const client = require("../configuration/client");
const { getUserByEmail } = require("../controllers/authentication");
function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    // console.log("user", user, password);
    if (user == undefined) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      console.log("password", user.password, password);
      const pass = await bcrypt.compare(user.password, password);
      console.log("pass", pass);
      // if (await bcrypt.compare(password, user.password)) {
      //   console.log("user valid",user)
      //   return done(null, user);
      // } else {
      //   console.log("er")
      //   return done(null, false, { message: "Password incorrect" });
      // }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    client.query("SELECT * from data WHERE id=$1", [id], (err, user) => {
      const userInformation = {
        username: user.email,
      };

      cb(err, userInformation);
    });
  });
}

module.exports = initialize;
