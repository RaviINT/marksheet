const { get, getById, post } = require("../models/authentication");
const jwt = require("jsonwebtoken");
const { validateBodyLogin } = require("../validations/body/login.validator");
const passport=require("passport")
module.exports = {
  getUser: async (req, res) => {
    try {
      console.log("new==>>>>>>",req.user[0].email)
      let data = await get(req.user[0].email);
      if (data.rows.length == 0) {
        res.send("No Users found");
      } else {
        res.json(data.rows);
      }
    } catch (err) {
      res.send(err);
    }
  },
  getToken: async (req, res,next) => {
    try {
      passport.authenticate("local",(err,user,info)=>{
        
        if(err) return err
        if(!user) res.send("No user exists")
        if(user){
          req.logIn(user,(err)=>{
            if(err) return err
            
            console.log(req.user)
            const user = {id:req.user.id, email: req.user.email };
            const accessToken = jwt.sign(user, "1233123213123");
      
            res.json({ accessToken: accessToken });
          })
        }
      })(req,res,next)
      

     
    } catch (err) {
      res.send(err);
    }
  },
  post: async (req, res) => {
    try {
      const { error, value } = validateBodyLogin(req.body);
      if (error) {
        return res.send(error.details);
      }
      let data = await post(value.email, value.password);

      if (data.rows.length == 0) {
        res.send("No Users found");
      } else {
        const email = req.body.email;
        const user = { email: email };
        const accessToken = jwt.sign(user, "1233123213123");

        res.json({ accessToken: accessToken });
      }
    } catch (err) {
      res.send(err);
    }
  },
};
