var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(allBurgers){
      res.render("index", allBurgers);
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(){
      res.redirect("/");
    });
  });
};

// router.post("/", function(req, res) {
//   burger.create([
//     "burger_name",
//   ], [
//     req.body.burger_name
//   ], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });