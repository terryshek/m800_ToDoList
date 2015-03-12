var express = require('express');
var router = express.Router();
var fs = require('fs');
var todolistData = require('../todolist_data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ToDoList' });
});
router.get('/getData', function(req,res){
    res.json(todolistData);
})

module.exports = router;
