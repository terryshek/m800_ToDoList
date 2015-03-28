var express = require('express');
var router = express.Router();
var fs = require('fs');
var todolistData = require('../todolist_data.json')
var todolist_db = require("../modal")

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(new getData())
  res.render('index', { title: 'ToDoList' });
});
router.get('/getData', function(req,res){
    var reData =new getData()
    todolist_db.find({}).sort( { "created_at": -1 }).find(function (err, todos) {
        if (err) return next(err);
        console.log(todos)
        res.json(todos);
    });
})
router.post('/addData', function(req,res){
    console.log(req.body)
    var task = new todolist_db({
        taskName: req.body.title
    });
    task.save(function (err, data) {
        if (err) console.log(err);
        else console.log('Saved : ', data );
        res.json({ 'Saved':data });
    });
    //res.json({ 'Saved':true });
});
router.post('/updateTask', function(req,res){
    console.log(req.body)
    var obj = req.body;
    var id = obj._id;
    delete obj._id;
    todolist_db.update({_id: id}, obj, {upsert: true}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/deleteTask/:id',function(req, res) {
    todolist_db.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});
router.post('/saveData', function(req,res){
    console.log(req.body)
    var outputFilename = 'todolist_data.json';
    fs.writeFile(outputFilename, JSON.stringify(req.body), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename);
            res.json({msg:'saved'});
        }
    });
})
var getData = function(){
    return todolistData
}

module.exports = router;
