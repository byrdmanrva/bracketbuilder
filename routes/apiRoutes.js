var db = require("../models");

module.exports = function(app) {
  // Get all competitors
  app.get("/api/competitors", function(req, res) {
    console.log(req.body);
    db.Competitors.findAll({}).then(function(dbbracketdb) {
      res.json(dbbracketdb);
    });
  });

  // Create a new competitors
  app.post("/api/competitors", function(req, res) {
    db.Competitors.create(req.body).then(function(dbbracketdb) {
      res.json(dbbracketdb);
    });
  });

  // Delete an example by id
  app.delete("/api/competitors/:id", function(req, res) {
    db.Competitors.destroy({ where: { id: req.params.id } }).then(function(dbbracketdb) {
      res.json(dbbracketdb);
    });
  });
};
