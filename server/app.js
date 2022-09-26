const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const helmet = require("helmet");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const initializePassport = require('./passport/passport')
const port=process.env.PORT|| 5000
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
const users=[]
app.use(cors());
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser("secretcode"));
app.use(express.json());
app.use(helmet());


const studentRouter = require("./routes/student.route");
const loginRouter = require("./routes/authentication");
const imageRouter = require("./routes/image");
const subjectRouter=require("./routes/subjects")
const skillRouter=require("./routes/skills")
const attendenceRouter=require("./routes/attendence")

app.use("/student", studentRouter);
app.use("/", loginRouter);
app.use("/image", imageRouter);
app.use("/subject", subjectRouter);
app.use("/skill", skillRouter);
app.use("/attendence", attendenceRouter);
app.listen(5000, () => {
  console.log(`app is connected ${5000}`);
});
