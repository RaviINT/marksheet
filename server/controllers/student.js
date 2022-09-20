const { get, post, remove, getById, updateById } = require("../models/student");

module.exports = {
  getUser: async (req, res) => {
    try {
      const data = await get;
      res.json(data);
    } catch (err) {
      console.log("getErr", err.message);
    }
  },
  postUser: async (req, res) => {
    try {
      await post(req.body.name, (results) => {
        res.json(results);
      });
    } catch (err) {
      console.log("postErr", err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await remove(req.body.id, (results) => {
        res.json(results);
      });
    } catch (err) {
      console.log("deleteErr", err.message);
    }
  },
  getById: (req, res) => {
    try {
      getById(req.body.id, (results) => {
        res.json(results);
      });
    } catch (err) {
      console.log("getErr", err.message);
    }
  },
  updateById: (req, res) => {
    try {
      updateById(req.body.id, req.body.name, (results) => {
        res.json(results);
      });
    } catch (err) {
      console.log("updateErr", err.message);
    }
  },
};
