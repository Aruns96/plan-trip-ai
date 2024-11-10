const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const tripRoute = require("../backend/routes/trip")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/trip",tripRoute)
mongoose.connect(process.env.MONGO_URL)
.then(result=>{
    app.listen(3000,()=>{
        console.log("server is listening..")
    })
}).catch(e=>console.log(e))

