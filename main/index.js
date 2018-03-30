const express = require('express');
const path = require('path');

const { Content } = require('../shared/models');

// const middleware = require('./middleware')

const main = express();

main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'pug');

main.on('mount', server => {
  main.locals = Object.assign(server.locals, main.locals);
});

main.get('/', (req, res, next) => {
  Content.find()
    .then(content => {
      // console.log(content)
      res.render('index', {
        'content': content[0]
      })
    })
    .catch(next)
});

module.exports = main;
