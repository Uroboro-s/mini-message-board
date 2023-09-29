const express = require('express');
const updateMessages = require('./index').method;
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', {});
});

router.post('/', function(req, res, next) {
  console.log(req.body.authorMessage);
  updateMessages({
    text: req.body.authorMessage,
    user: req.body.authorName,
    added: new Date()
  });
  res.redirect('/');
})

module.exports = router;
