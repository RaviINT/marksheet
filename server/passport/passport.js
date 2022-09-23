const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const client = require("../configuration/client");
const { getUserByEmail } = require("../controllers/authentication");
function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);

    if (user == undefined) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
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
