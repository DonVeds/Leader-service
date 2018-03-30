const express = require('express');
const path = require('path');

// const middleware = require('./middleware')

const main = express();

main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'pug');

main.on('mount', server => {
  main.locals = Object.assign(server.locals, main.locals);
});

main.get('/', (req, res) => {
  res.render('index', {
    title: 'Main Page'
  })
});

module.exports = main;
