const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const studentRouter = require("./routes/student.route");
app.use("/", studentRouter);
app.listen(5000, () => {
  console.log("app is connected");
});
