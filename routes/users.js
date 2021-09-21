var express = require('express');
var router = express.Router();

let discGolfersArray = [
  {
    rank: 1,
    player: "andy"
  },
  {
    rank: 2,
    player: "bob"
  },
  {
    rank: 3,
    player: "jake"
  },
  {
    rank: 4,
    player: "josh"
  },
  {
    rank: 5,
    player: "luke"
  },
  {
    rank: 6,
    player: "kevin"
  },
  {
    rank: 7,
    player: "mike"
  },
  {
    rank: 8,
    player: "eric"
  },
  {
    rank: 9,
    player: "adam"
  },
  {
    rank: 10,
    player: "austin"
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
