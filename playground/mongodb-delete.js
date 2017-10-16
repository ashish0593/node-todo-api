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

  //deleteMAny
  db.collection('Users').deleteMany({name: 'Ashish'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59e1ce502f70a76f0690ddd2')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
