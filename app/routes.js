var mongoose = require('mongoose'),
  Copy       = mongoose.model('Copy');

exports.initialise = function(app){
  initialiseRoutes(app);
};

// App settings and middleware
function initialiseRoutes(app) {

  app.get("/", function (req, res){
    res.render('index', { pageTitle: 'Home' });
  });

  app.get("/create", function (req, res){
    
  });

  app.post("/create", function (req, res){
    
  });

  app.get("/edit", function (req, res){
    
  });

  app.post("/edit", function (req, res){
    
  });

  app.post("/delete", function (req, res){
    
  });

  app.get("/details", function (req, res){
    
  });

  app.post("/comment", function (req, res){
    
  });

}