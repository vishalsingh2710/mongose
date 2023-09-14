import express from "express";
import mongoose from "mongoose"; 
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
const app = express();
app.use(express.json());

app.use("/api/user",router); 
app.use("/api/blog",blogRouter); 

mongoose.connect("mongodb+srv://admin:7OOUqNr6skFrxb6z@cluster0.tkea8e8.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(() => app.listen(5000))
.then(() => console.log("Connected To Database and Listening TO localhost 5000"))
.catch((err) => console.log(err));