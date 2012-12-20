var express = require('express'),
    fs      = require('fs'),
    app     = express();

// Bootstrap application settings
require('./settings').boot(app);

// Models
require('./models');

// Set up routes
require('./routes').initialise(app);

// Start 'er up!
var portNo = process.env.PORT || 8008;
if (!module.parent) {
  app.listen(portNo);
  console.log('Express app started on port ' + portNo);
}