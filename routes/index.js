const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Andrew",
    added: new Date()
  },
  {
    text: "Bye Bye World",
    user: "Tristan",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Message Board', messages: messages});
});

function updateMessages(newMessage) {
  messages.push(newMessage);
  console.log(messages);
}

module.exports = {
  router: router,
  method: updateMessages
};
