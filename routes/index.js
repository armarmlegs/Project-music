var express = require('express');
var router = express.Router();
// const protectRoute = require("./../middlewares/thisProtector")

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Project-Music' });
});

router.get("/profile",  function (req, res) {
  res.render("Profile");
});

module.exports = router;
