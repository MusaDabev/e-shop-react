const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");

dotenv.config();

// Connect to database

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(express.json());
  
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);

  
  // Run server

  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });
  