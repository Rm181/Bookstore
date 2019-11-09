var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = require('../models/Book.js');


/* GET  all books  from database */
/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
    Book.find(function (err, data) {
      if (err) return next(err);
      res.json(data);
    })
  })

  //_____________________________________________________

  router.post('/',function(req,res,next){
    Book.create(req.body,function(err,data){
      if (err) return next(err);
      res.json(data);
    })
  })

  //______________________________________________________
module.exports = router;