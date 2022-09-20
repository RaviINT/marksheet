const client = require("../configuration/client");
module.exports = {
  get: client
    .query("SELECT * FROM students")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err.message)),

  post: (name) => {
    console.log("name", name);
    client
      .query("INSERT INTO students (name) VALUES ($1) RETURNING *", [name])
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err.message));
  },
};
