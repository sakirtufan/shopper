import mongoose from "mongoose"


export const connectDatabase=() => {
  mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/shopper", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
