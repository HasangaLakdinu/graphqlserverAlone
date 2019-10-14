const uuid = require('uuid');
const mongoose = require('mongoose');
const todoModel = require('../models/todo.js');


// function addTodo(parent,args,context,info){
//     const todo = new todoModel({
//         description: args.description       
//     });
//     return todo.save();
// }

 function addTodo(root, args){
    const todo = new todoModel({description:args.description});
     return todo.save();
  }

module.exports={
    addTodo
}
