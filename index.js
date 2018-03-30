const express = require('express');
const logger = require('morgan');

const db = require('./shared/services/db');
const config = require('./shared/config');

const main = require('./main');
const admin = require('./admin');

// const flash = require('./shared/middleware/flash');

const server = express();

server.set('view engine', 'pug');
server.set('config', config);

server.locals.version = config.version;

server.locals = Object.assign(server.locals, config);

server.use('/', express.static(config.paths.public));
// server.use('/lib', express.static(config.paths.lib));
// server.use(express.urlencoded({ extended: false }));

// server.use(flash());

// server.use((req, res, next) => {
//   res.locals.user = req.user;

  
//   next();
// });

server.use(logger('dev'));

server.use('/', main);
server.use('/admin', admin);

server.listen(config.port, () => console.log(`Server is working on localhost:${config.port}`));
