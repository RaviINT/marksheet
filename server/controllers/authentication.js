const { post, getUserByEmail } = require("../models/authentication");
const jwt = require("jsonwebtoken");
const client = require("../configuration/client");
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
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
      let data = await post(req.body);
      console.log("data", data);
      if (!data) {
        res.send("Something went wrong");
      } else {
        const id = await client.query(
          "SELECT id from registration WHERE email=$1",
          [req.body.email]
        );

        const user = {
          id: id.rows[0].id,
          createdAt: time,
          createdOn: date,
        };
        const accessToken = jwt.sign(user, "1233123213123", {
          expiresIn: "15s",
        });

        res.json({ accessToken: accessToken });
      }
    } catch (err) {
      res.send(err);
    }
  },
  genToken: (req, res) => {
    const user = { id: req.user.id, createdAt: time, createdOn: date };
    const accessToken = jwt.sign(user, "1233123213123", {
      expiresIn: "15s",
    });

    res.json({ accessToken: accessToken });
  },
};
