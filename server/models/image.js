const client = require("../configuration/client");
module.exports = {
  create: async (data, callBack) => {
    await client.query(
      "INSERT into image(image,id) VALUES ($1,$2)",
      [data.image, data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getImageById: async (id, callBack) => {
    console.log("getId", id);
    await client.query(
      "SELECT * from image WHERE id=$1",
      [id],
      (err, results) => {
        if (err) {
          console.log(err)
          callBack(err);
        }
        console.log(results.rows[0])
        return callBack(null, results.rows[0]);
      }
    );
  },
};
