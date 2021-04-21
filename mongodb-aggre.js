const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    const dbname = db.db("ekart")

    //aggregation
   // match and gt
  //  dbname.collection('cart').aggregate({$match:{price:{$gt:10}}}).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });

 //find and $and lt
  //  dbname.collection('cart').find({$and:[{price:{$lt:35}},{price:{$gt:10}}]}).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });


//$nin
  //  dbname.collection('cart').find({price:{$nin:[15,50]}}).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });

  //nor
  //  dbname.collection('cart').find({$nor:[{price:{$lt:60}},{price:{$gt:20}}]}).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });


  //exist and nin
  //  dbname.collection('cart').find({price:{$exists:true,$nin:[10,50]}}).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });

  //all
  //  dbname.collection("products").find( { name: { $all: [ "choco" ] } } ).toArray(function(err, res) {
    
  //   console.log(JSON.stringify(res));
  //   db.close();
  // });
   

   
   })
  
  