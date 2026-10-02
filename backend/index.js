const express=require("express")
const app=express();
const PORT=3000;
const{logReqRes}=require("./middleware/middleware")
const{connectMongoDb}=require("./connection")
const router=require("./routes/userRoutes")

app.use(logReqRes("log.txt"));
app.use(express.json())
connectMongoDb("mongodb://127.0.0.1:27017/userDb")
app.use("/api",router);

app.listen(PORT,()=>console.log(`Server Started`))