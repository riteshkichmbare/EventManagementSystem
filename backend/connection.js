const mongoose = require("mongoose"); 

async function connectMongoDb(url){

    return mongoose.connect(url)
    .then(()=>console.log("DataBase Connected"));

}

module.exports={connectMongoDb}