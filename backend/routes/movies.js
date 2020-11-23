var express = require('express');
var router = express.Router();
var movies = require('../json/movies.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(movies);
});

router.get('/:id', function (req, res, next) { 
  var id = parseInt(req.params.id, 10) 
  var movie = movies.filter(function (movie) { 
      return movie.id === id // id가 일치하는 값만 리턴
  }); 
  res.send(movie) 
});

module.exports = router;
