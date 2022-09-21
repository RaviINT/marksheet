const { get, getById, post } = require("../models/authentication");
const jwt = require("jsonwebtoken");
const { validateBodyLogin } = require("../validations/body/login.validator");
module.exports = {
  getUser: async (req, res) => {
    try {
      console.log("new",req.user.email)
      let data = await get(req.user.email);
      if (data.rows.length == 0) {
        res.send("No Users found");
      } else {
        res.json(data.rows);
      }
    } catch (err) {
      res.send(err);
    }
  },
  getToken: async (req, res) => {
    try {
      const { error, value } = validateBodyLogin(req.body);
      if (error) {
        return res.send(error.details);
      }

      const user = { email: value.email, password: value.password };
      const accessToken = jwt.sign(user, "1233123213123");

      res.json({ accessToken: accessToken });
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
