const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const client=require("../configuration/client")
module.exports = function (passport) {
  passport.use(
    
    new localStrategy(async (username, password, done) => {
      // console.log("sttt",username,password)
     await client.query("SELECT * from data WHERE email=$1",[username], (err, user) => {
      // console.log("s",user.rows)
        if (err) return done(null, false);;
        if (user.rows.length==0) return done(null, false);
        bcrypt.compare(password, user.rows[0].password, (err, result) => {
          // console.log(result)
          if (err) return  err;
          if (result === true) {
            // console.log("pass",user.rows[0])
            return done(null, user.rows[0]);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    // console.log("seria",user)
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    // console.log("id",id)
    await client.query("SELECT * from data WHERE id=$1",[id], (err, user) => {
      console.log("user",user.rows[0])
      const userInformation = {
        username: user.email,
      };
      cb(err, userInformation);
    });
  });
};