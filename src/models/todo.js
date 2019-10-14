const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Schema = mongoose.Schema;

const todoSchema=new Schema({
    id: {type: String , default: uuidv4()},
    description: String
   
});


module.exports= mongoose.model('todo',todoSchema);
