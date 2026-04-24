const express = require("express");
const connectToMongoDB = require("./connectToMongoDB");
const cors = require("cors");

const app = express();
const userRoute =require("./routes/user");
const PinRoute =require("./routes/pin");



app.use(cors());

app.use(express.json());

app.use("/api/users/",userRoute);
app.use("/api/pins/",PinRoute);

app.listen(8800,()=>{
    connectToMongoDB();
    console.log("Server is running");
});
