const { post, getUserByEmail } = require("../models/authentication");
const { storeData,getData } = require("../models/login");
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

        const logged = await storeData({
          date: date,
          time: time,
          status: true,
          ip: req.body.ip,
          id: id.rows[0].id,
        });

        if (logged.rowCount > 0) {
          const user = {
            id: id.rows[0].id,
            createdAt: time,
            createdOn: date,
            IST: "INT",
          };
          const accessToken = jwt.sign(user, "1233123213123", {
            expiresIn: "24h",
          });

          res.json({ accessToken: accessToken });
        }else{
          res.send("something went wrong")
        }
      }
    } catch (err) {
      res.send(err);
    }
  },
  genToken:async (req, res,mes) => {
    
    const logged=await getData(mes)
    console.log("idd=>>",logged)
    const user = {
      id: mes,
      createdAt: time,
      createdOn: date,
      IST: "INT",
    };
    const accessToken = jwt.sign(user, "1233123213123", {
      expiresIn: "24h",
    });

    res.json({ accessToken: accessToken });
  },
};
