const mongoose = require('mongoose');
//mongoose is a wrapper of mongoDB

// const url = "mongodb://localhost:27017/ARMS";
const url = "mongodb+srv://armsDB:armsDB@armsdb-kzgvl.mongodb.net/ARMS?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
 
//connecting to the database
mongoose.connect(url, { useNewUrlParser: true, keepAlive: 1, useUnifiedTopology: true }).then((res) =>{
    console.log("Connection Established -- DONE");
}).catch(error =>{
    console.log(error.message)
});

module.exports = mongoose