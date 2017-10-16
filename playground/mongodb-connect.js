//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//----OBJECT DESTRUCTURING-------//
// var user = {name: 'ashish', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text : 'something to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert T0do', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Ashish',
  //   age: 25,
  //   location: 'Toronto'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to inset user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
