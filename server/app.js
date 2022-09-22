const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(express.json());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
require("./passport/passport")(passport);

const studentRouter = require("./routes/student.route");
const loginRouter = require("./routes/authentication");
const imageRouter = require("./routes/image");

////
app.post("/signIn", (req, res, next) => {
  console.log("post");
  passport.authenticate("local");
});

///

app.use("/student", studentRouter);
app.use("/login", loginRouter);
app.use("/image", imageRouter);
app.listen(5000, () => {
  console.log("app is connected");
});
