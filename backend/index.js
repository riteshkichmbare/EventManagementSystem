require("dotenv").config();
const express=require("express")
const app=express();
const PORT=process.env.PORT || 3000;
const{logReqRes}=require("./middleware/middleware")
const{connectMongoDb}=require("./connection")
const router=require("./routes/userRoutes")
const authRouter=require("./routes/authRoutes")
const registrationRouter=require("./routes/registrationRoutes")
const cors=require("cors")

app.use(logReqRes("log.txt"));
app.use(express.json())
app.use(cors())
connectMongoDb(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/UserDB")
app.use("/api",router);
app.use("/api/auth",authRouter);
app.use("/api/registrations",registrationRouter);

app.listen(PORT,()=>console.log(`Server Started on port ${PORT}`))
