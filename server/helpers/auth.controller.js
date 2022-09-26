const secret_key = "1233123213123";
const client = require("../configuration/client");
const jwt=require("jsonwebtoken")
const getToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const admimAuth = async(req, res, next) => {
  const headerToken = getToken(req);
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    headerToken;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    
    const decoded = jwt.verify(token, secret_key);
    // console.log("decode", decoded);
    const user=await client.query("SELECT id FROM registration WHERE id=$1",[decoded.id])
    if(user.rows.length>0){
        next()
    }
    else{
        return res.status(403).send("You are not allowed to perform this action.");
    }
  } catch (err) {
    
    return res.status(401).send(err.message);
  }
};

module.exports=admimAuth