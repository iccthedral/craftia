(function() {
  var PORT, app, db, express, flash, handlebars, hbs, log, mongoose, passport, wrench;

  express = require("express");

  mongoose = require("mongoose");

  passport = require("passport");

  db = require("./config/Database");

  handlebars = require("express3-handlebars");

  flash = require("connect-flash");

  wrench = require("wrench");

  require("./config/Passport")(passport);

  PORT = process.env.PORT || 3000;

  app = express();

  log = console.log.bind(console);

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
    app.engine("hbs", hbs.engine);
    app.set("view engine", "hbs");
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

  log("Running on: " + PORT);

}).call(this);
