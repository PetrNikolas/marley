'use strict';
const router = require('koa-router')();
const path = require('path');
const config = require('./config');

/*
* Routes
*/
// For all GET requests, send back index.html
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + config.staticPath + '/index.html'));
});

// Export module with routes
module.exports = router;