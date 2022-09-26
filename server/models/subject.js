const client = require("../configuration/client");

module.exports = {
  getSubject: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let subjects=client.query("SELECT ")
      } catch (err) {
        reject(err);
      }
    });
  },
};
