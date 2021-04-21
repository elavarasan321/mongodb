const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ekart',{
     useNewUrlParser: true ,
     useUnifiedTopology: true
});



const thingschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    time:
    {
        type:Date,
        default:()=>Date.now()
    },
    
});

module.exports = mongoose.model('details',thingschema);
