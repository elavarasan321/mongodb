const things = require("./mongoose");

let Things = new things({
    name:"box",
    creator:"elavarasan",
    description:"pencil box",
  });
 insertion
  try{
    Things = Things.save();
    //redirect for particulr data
    console.log("success");
  }catch(err){
    console.log(err);
  }

