const express = require("express");
const cors = require("cors");
const app = express();
const passport=require("passport")
const helmet = require("helmet");

app.use(cors());
app.use(express.json())
app.use(helmet())

const studentRouter = require("./routes/student.route");
const loginRouter=require("./routes/authentication")

app.use(passport.initialize())
app.use("/student", studentRouter);
app.use("/login", loginRouter);
app.listen(5000, () => {
  console.log("app is connected");
});
