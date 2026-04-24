const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,);
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("Error connecting mongodb ",error.message);
    }
}
module.exports=connectToMongoDb;