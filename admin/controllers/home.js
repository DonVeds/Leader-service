const { Content } = require('../../shared/models');

module.exports = {
  showIndexPage(req, res, next) {
    Content.find()
      .then(content => {
        // console.log(content)
        res.render('index', {
          'title': content[0].name
        })
      })
      .catch(next)
  }
}
