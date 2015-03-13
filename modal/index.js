/**
 * Created by terryshek on 13/3/15.
 */
var mongoose = require('mongoose');
var todolistShema = new mongoose.Schema({
    taskName: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('todolist', todolistShema);
