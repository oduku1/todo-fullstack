import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./schemas/schema.js";
import Todo from "./models/Todos.js";

dotenv.config();  // <-- MUST be here before connectDB

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});


app.get("/todos", async (req,res)=>{
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }
    catch(e){
        console.log(e)
        res.status(400).json({error:e.message})
    }
 

})






async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
  });
}

startServer();