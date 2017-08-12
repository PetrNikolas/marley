'use strict';
const koa = require('koa');
const router = require('./router');
const staticServe = require('koa-static');
const bodyParser = require('koa-bodyparser');
const config = require('./config');

// Defined new Koa app
const app = new koa();

/*
* If an incoming request uses a protocol other than HTTPS, redirect that request to the same url but with HTTPS
*/
//const forceSSL = function() {
  //return function (req, res, next) {
    //if (req.headers['x-forwarded-proto'] !== 'https') {
      //return res.redirect(
        //['https://', req.get('Host'), req.url].join('')
      //);
    //}
    //next();
  //}
//}
// Instruct the app to use the forceSSL middleware
//app.use(forceSSL());

// Run the app by serving the static files
app.use(staticServe(config.staticPath));

// Usage body parser
app.use(bodyParser());

// Get all routes from ./config.js file
app.use(router.routes());

// Start the app by listening on the default
app.listen(config.port);
console.log(`Listening on port ${config.port}`);