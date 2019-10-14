const mongoose = require('mongoose');
const todoModel = require('../models/todo.js');

function info() {
  return "Lakdinu is the best";
}



function getTodo() {
    return todoModel.find({})
}

module.exports = {
  info,
  getTodo
};
