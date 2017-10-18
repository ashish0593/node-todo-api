const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59e7d6262e8032f4797c3bc211';
//
// if(!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


var userId = '59e7b6552158b63a77708601';

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('user id not found');
  }
  console.log('user', user);
}).catch((e) => console.log(e));
