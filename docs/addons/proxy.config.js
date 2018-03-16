'use strict';

const path = require('path');
const proxy = require('http-proxy-middleware');
const convert = require('koa-connect');

module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'app.js')]
  },
  mode: 'development',
  output: {
    filename: 'output.js'
  }
};

module.exports.serve = {
  content: [__dirname],
  add: (app, middleware, options) => {
    const proxyOptions = {
      target: 'http://reqres.in/',
      changeOrigin: true
      // ... see: https://github.com/chimurai/http-proxy-middleware#options
    };

    app.use(convert(proxy('/api', proxyOptions)));
  }
};
