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
router.post('/saveData', function(req,res){
    console.log(req.body)
    var outputFilename = 'todolist_data.json';
    fs.writeFile(outputFilename, JSON.stringify(req.body, null, 4), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename);
            res.json({msg:'saved'});
        }
    });
})


module.exports = router;
