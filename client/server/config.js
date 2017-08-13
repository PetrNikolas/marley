'use strict';
const path = require('path');

// All static files
const localStaticPath = '../dist';

module.exports = {
  port: process.env.PORT || 8080,
  staticPath: path.resolve(__dirname, localStaticPath)
};