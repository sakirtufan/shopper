import express from "express"
import productRouter from "./routers/productRouter.js"
import userRouter from "./routers/userRouter.js"
import dotenv from "dotenv"
import { connectDatabase } from './helpers/connectDatabase.js'


dotenv.config();

const app = express();
// parse params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err,req,res,next) => {
  res.status(500).send({ message:err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
