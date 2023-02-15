const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();
require("dotenv").config()

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

//sends the data from node server to client

app.get("/", (req,res) => {
    res.send("Welcome to our Chat App API");
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) =>{
    console.log(`server running on port: ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connection Established"))
.catch((error) => console.log("MongoDB conection failed: ", error.message));