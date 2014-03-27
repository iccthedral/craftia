(function() {
  var PORT, app, db, dbconfig, express, flash, handlebars, hbs, helpers, log, mongoose, passport, wrench;

  PORT = process.env.PORT || 3000;

  express = require("express");

  mongoose = require("mongoose");

  passport = require("passport");

  dbconfig = require("./config/Database");

  handlebars = require("express3-handlebars");

  helpers = require("./lib/HBHelpers");

  flash = require("connect-flash");

  wrench = require("wrench");

  require("./config/Passport")(passport);

  app = express();

  log = console.log;

  mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || dbconfig.url);

  db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error: "));

  db.once("open", function() {
    return console.log("Connected to DB");
  });

  hbs = handlebars.create({});

  wrench.readdirSyncRecursive("utils/").filter(function(file) {
    return file.lastIndexOf(".js") !== -1;
  }).forEach(function(util) {
    return require("./utils/" + util)();
  });

  app.configure(function() {
    var router;
    app.use(express.logger("dev"));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    app.use(express.session({
      secret: "ve2r@y#!se3cret_so!wow1#@*)much(9awe19_hoi"
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    router = require("./backend/Router");
    return router(app, passport);
  });

  app.use(express["static"]("www/"));

  app.listen(PORT);

  console.log("Running on: " + PORT);

}).call(this);
