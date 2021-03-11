require("dotenv").config();
require("./config/mongodb");



const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const flash = require("connect-flash"); // designed to keep messages between 2 http request/response cycles
const hbs = require("hbs");
const session = require("express-session");
const app = express();
// const MongoStore = require("connect-mongo")
// const mongoose = require("mongoose")




// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials")); // where are the tiny chunks of views ?

app.use(logger("dev"));
app.use(express.json()); // expose asynchronous posted data in req.body
app.use(express.urlencoded({ extended: true })); // same for synchronous posted data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//Init Session
app.use(
  session({
    secret: process.env.SESS_SECRET,
    // store: MongoStore.create({
      // mongooseConnection: mongoose.connection
    // }),
    saveUninitialized: true,
    resave: true
  })
);
//Middlewares party

app.use(flash());
app.use(require("./middlewares/exploseFlashMessage"));
app.use(require("./middlewares/exposeLoginStatus"));


//Connect Routers

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require ("./routes/auth");
const artistRouter = require("./routes/artist");
const albumRouter = require("./routes/album");
const albumDetsRouter = require ("./routes/albumDets");
const artistDetsRouter = require ("./routes/artistDetsRouter");
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', authRouter);
app.use("/dashboard/artist", artistRouter);
app.use("/dashboard/album", albumRouter);
app.use("/albums", albumDetsRouter);
app.use("/artists", artistDetsRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
