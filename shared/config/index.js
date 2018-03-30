'use strict';

const env = require('node-env-file');
const path = require('path');

env('./.ENV');

module.exports = {
  version: '1.0.0',
  port: process.env.PORT || 3000,
  sessionSecret: process.env.SESSIONSECRET,
  paths: {
    // lib: path.resolve(__dirname, '..', 'node_modules'),
    public: path.resolve(__dirname, '..', 'public')
  },
  mongodbUrl: process.env.MONGODB
};
