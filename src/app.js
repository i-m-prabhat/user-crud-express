import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import 
import userRouter from './routes/user.route.js'


//routes declaration
app.get("/", (req, res) =>
{
    res.json({
        message: "Welcome to the CRUD API!",
        statusCode: 200,
    });
});

app.use("/api/v1/user/", userRouter);


export { app };