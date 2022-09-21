const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const client = require("../configuration/client");
module.exports = function (passport) {
  // console.log("passport");
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: "1233123213123",
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async function (jwt_payload,next) {
        
        await client.query(
          "SELECT email from data WHERE email=$1",
          [jwt_payload.email],
          (err, data) => {
            if (err) {
              return next(err, false);
            }
            if (data.rows.length>0) {
              console.log(data.rows)
              return next(null,data.rows);
            } else {
              next(null, false);
            }
          }
        );
      }
    )
  );
};
