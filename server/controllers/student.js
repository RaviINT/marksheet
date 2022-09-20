const { get, post } = require("../models/student");
module.exports = {
  getUser: (req, res) => {
    get
      .then((ress) => res.json(ress.rows))
      .catch((err) => console.log(err.message));
  },
  postUser: (req, res) => {
    post("ravi")
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  },
};
