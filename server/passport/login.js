const jwt = require("jsonwebtoken");
function authenticationToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "1233123213123", (err, user) => {
    if (err) return res.send("Failed to authenticate token")
    req.user = user;
    console.log(req.user)
    next();
  });
}
module.exports = authenticationToken;