var express = require('express'),
    fs = require('fs'),
    utils = require('./lib/utils'),
    app = express();

// Bootstrap application settings
require('./settings').boot(app);

// Start 'er up!
var portNo = process.env.PORT || 8008;
app.listen(portNo);
console.log('Express app started on port ' + portNo);