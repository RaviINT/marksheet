const { post, getUserByEmail } = require("../models/authentication");
const jwt = require("jsonwebtoken");
const { validateBodyLogin } = require("../validations/body/login.validator");
const passport = require("passport");
module.exports = {
  getUserByEmail: async (email) => {
    try {
      const user = await getUserByEmail(email);
      // console.log("hii",user.rows[0])
      return user.rows[0];
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
  genToken: (req, res) => {
    const user = { id: req.user.id, email: req.user.email };
    const accessToken = jwt.sign(user, "1233123213123");

    res.json({ accessToken: accessToken });
  },
};
