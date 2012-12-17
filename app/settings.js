var express = require('express'),
    url = require('url');

exports.boot = function(app){
  bootApplication(app);
};

// App settings and middleware
function bootApplication(app) {
  app.configure(function(){

    // bodyParser should be above methodOverride
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.engine('.ejs', require('ejs').__express);
    app.set('views', __dirname + '/app/views');

    app.use(express.static(__dirname + '/public'));

    app.locals({
      siteTitle: 'Scribbble'
    });

    app.use(express.logger(':method :url :status'));

    app.set('showStackError', false);

    // routes are last to give priority to static files
    app.use(app.router);
  });

}