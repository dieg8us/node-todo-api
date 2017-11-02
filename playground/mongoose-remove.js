const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: id}).then((todos) => {
//   console.log(todos);
// });

let id = '59f8760b0c6d895cdc5bc4f3';

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
