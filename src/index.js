import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
.then(()=>{
     app.listen(process.env.PORT,()=>{
        console.log("Server Started Listening on port :",process.env.PORT);
     })
})
.catch((err)=>{
    console.log("MondoDB connection failed",err);
})
