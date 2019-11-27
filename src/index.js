const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
//inicializaciones
const app = express();
require("./database");
require("./passport/local_auth");

// configuraciones
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.set("port", process.env.PORT || 3002);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mysecreteSession",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signupMessage = req.flash("signupMessage");
  app.locals.signinMessage = req.flash("signinMessage");
  next();
});
// rutas
app.use("/", require("./routes/index"));

// iniciando el servidor

app.listen(app.get("port"), () => {
  console.log("server on Port ", app.get("port"));
});
