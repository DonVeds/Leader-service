'use strict';

const env = require('node-env-file');
const path = require('path');

env(__dirname + '/..env');

module.exports = {
  version: '1.0.0',
  port: process.env.PORT || 5000,
  sessionSecret: process.env.SESSIONSECRET,
  paths: {
    views: path.resolve(__dirname, '..', 'views'),
    public: path.resolve(__dirname, '..', 'public'),
    lib: path.resolve(__dirname, '..', 'node_modules'),
    favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico')
  },
  mongodbUrl: process.env.MONGODB
};
