const { get, post, remove, getById, updateById } = require("../models/student");
module.exports = {
  getUser: (req, res) => {
    get
      .then((results) => res.json(results.rows))
      .catch((err) => console.log("getErr", err.message));
  },
  postUser: async (req, res) => {
    post(req.body.name, (err, results) => {
      if (results) {
        res.json(results);
      }
      if (err) {
        console.log(err);
      }
    });
  },
  deleteUser: (req, res) => {
    console.log(req.body.id);
    remove(req.body.id, (err, results) => {
      if (results) {
        res.send(results);
      }
      if (err) {
        console.log(err);
      }
    });
  },
  getById: (req, res) => {
    getById(req.body.id, (err, resuts) => {
      if (resuts) {
        res.json(resuts);
      }
      if (err) {
        console.log(err);
      }
    });
  },
  updateById: (req, res) => {
    updateById(req.body.id, req.body.name, (err, results) => {
      if (results) {
        res.send("Updated");
      }
      if (err) {
        console.log(err);
      }
    });
  },
};
