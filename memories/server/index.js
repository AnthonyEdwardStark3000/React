//starting point of server
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/posts.js";

const app = express();

app.use('/posts', PostRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));   
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));   
app.use(cors());   

const  CONNECTION_URL = "mongodb+srv://Javascriptmind:1A65iauMHS1mgG9V@cluster0.urlgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true }).then(()=>{
    app.listen(PORT, ()=> console.log(`App started at PORT ${PORT}`));
}).catch((err)=>{
    console.log(err.message)
});

// mongoose.set('useFindAndModify', false);
//name Javascriptmind  ;password 1A65iauMHS1mgG9V