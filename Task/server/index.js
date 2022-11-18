import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import user from "./routers/routes.js"
import admin from "./routers/user.js"
import uploadRoute from "./routers/routes.js"

import dotenv from 'dotenv'
dotenv.config();
const app= express()
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))


app.use("/api/codis",user)
app.use("/api/codis",admin)
app.use("/api/video",uploadRoute)

mongoose.connect('mongodb+srv://sandy:sandy123@cluster0.zs7jq2v.mongodb.net/stream?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})