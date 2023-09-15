const mongoose = require("mongoose")
const {MONGO_URI}= process.env

const connectDatabase = ()=>{


    //connecting the database
mongoose.connect(MONGO_URI)
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log(err))
 
    
}

module.exports = connectDatabase;