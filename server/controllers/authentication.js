const { get,getById,post } = require("../models/authentication");
const jwt=require("jsonwebtoken")

module.exports = {
  getUser: async (req, res) => {
    try {
      let data = await get();
      if (data.rows.length == 0) {
        res.send("No Users found");
      } else {
        res.json(data.rows);
      }
    } catch (err) {
      res.send(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      console.log("req.user",req.user)
      let data = await getById(req.user.email);
      if (data.rows.length == 0) {
        res.send("No Users found");
      } else {
        res.json(data.rows);
      }
    } catch (err) {
      res.send(err);
    }
  },
  post: async (req, res) => {
    try {
      // let data = await post(req.body.email,req.body.password);
      
      // if (data.rows.length == 0) {
      //   res.send("No Users found");
      // } else {
        const email=req.body.email
      const user={email:email}
      const accessToken=jwt.sign(user,"1233123213123")
      
        res.json({accessToken:accessToken});
      // }
    } catch (err) {
      res.send(err);
    }
  },
};
