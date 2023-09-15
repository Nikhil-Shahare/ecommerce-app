require("dotenv").config();
const app = require("./app")
const {PORT} = process.env
const connectDatabase = require("./db/database")


connectDatabase();

app.get("/",(req,res)=>{
    res.send("Hare Krishna")
})


app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}`)
})





