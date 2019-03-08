var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Competitors.findAll({}).then(function(dbbracketdb) {
      res.render("index", {
        //msg: "Welcome!",
        Competitor: dbbracketdb
      });
    });
  });

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
