const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017/';


// Use connect method to connect to the server
MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
     const dbname = db.db("ekart")

    // create collection
    dbname.createCollection("cart",function(err){
        console.log("collection created")

        db.close();
    })


    //insertion
    dbname.collection("cart").insertOne({name:"biscuit",price:35,pcs:2},function(err,resul){
        console.log("data inserted");

        db.close();
    })

    //insertion many
    data = [{name:"choco",price:15,pcs:2},{name:"bourn",price:25,pcs:2},{name:"palkova",price:35,pcs:2}]
    dbname.collection("cart").insertMany(data,function(err,resul){
        console.log("datas inserted");

        db.close();
    })


    //find one   
    dbname.collection("cart").findOne({name:"biscuit"},function(err,result){
        console.log(result.price);

        db.close();
    })


    //upadte one
    dbname.collection("cart").updateOne({name:"bourn"},{$set:{name:"biscuit"}},function(err,result){
        console.log(result);

        db.close();
    })

    // //find many
    dbname.collection("cart").find().toArray(function(err,result){
        console.log(result);

        db.close();
    })

    //projection
    dbname.collection("cart").find({name:/^b/},{projection:{name:1,price:1}}).toArray(function(err,result){
            console.log(result);
    
            db.close();
        })


    //upadte many
    dbname.collection("cart").updateMany({name:"biscuit"},{$set:{name:"choco"}},function(err,result){
        console.log(result);

        db.close();
    })

      //sort asc = 1 desc = -1
    dbname.collection("cart").find().sort({name:1}).toArray(function(err,result){
            console.log(result);
    
            db.close();
        })
    
    //deletion one
    dbname.collection("cart").deleteOne({name:"choco"},function(err,result){
        console.log(result);

        db.close();
    })

    //deletion many
    dbname.collection("cart").deleteMany({name:"choco"},function(err,result){
        console.log(result);

        db.close();
    })
  
   //view changes
    dbname.collection("cart").find().toArray(function(err,result){
        console.log(result)
        db.close();
    })


    //drop collection
    dbname.dropCollection("backup",function(err,result){
        console.log("drop collection")
    });


    //show all collections
    dbname.listCollections().toArray(function(err,result){
        console.log(result)
    });


});