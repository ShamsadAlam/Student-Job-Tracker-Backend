import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
  });
});
