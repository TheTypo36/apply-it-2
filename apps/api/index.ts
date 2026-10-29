import express from "express";


const app = express();
app.use(express.json());

//routes
import userRouter from "./routes/userRoutes.ts";
app.use("/api/v1/user",userRouter)
app.get("/health",(req,res)=>{
    res.send("<h1>api server is healthy");
})

app.listen(8080,()=>{
    console.log("log server is running at 8080")
})