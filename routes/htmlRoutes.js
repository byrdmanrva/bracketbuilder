var db = require("../models");
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.render("signup");
    
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    db.Competitors.findAll({}).then(function(dbbracketdb) {
      res.render("index", {
        //msg: "Welcome!",
        competitor: dbbracketdb
      });
    });
  });
  // Load home//index page
  // app.get("/home", function(req, res) {
  //   db.Competitors.findAll({}).then(function(dbbracketdb) {
  //     res.render("index", {
  //       //msg: "Welcome!",
  //       competitor: dbbracketdb
  //     });
  //   });
  // });

  ///testing conversion to handlebars 
  // app.get("/splash", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "..\views\splash.handlebars"));
  // });

  // Load example page and pass in an example by id
  app.get("/competitor/:id", function(req, res) {
    db.Competitors.findOne({ where: { id: req.params.id } }).then(function(dbbracketdb) {
      res.render("Competitor", {
        competitor: dbbracketdb
      });
    });
  });
  app.get("/bracket", function(req, res) {
    res.render("bracket")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
