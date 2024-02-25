const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const hotelRouter = require("./hotelRouter");
const categoryRouter = require("./routes/category.router");
const hotelDataAddedToDbRouter = require("./routes/dataImport.router");
const categoryDataAddedToDbRouter = require("./routes/categoryImport.router");
const singleHotelRouter = require("./routes/singleHotel.router");
const authRouter = require("./routes/auth.router");
const wishListRouter = require("./routes/wishlist.router");
const connectDB = require("./config/dbConfig");
const app = express();

const Port = 8080;

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hoteldata", hotelDataAddedToDbRouter);
app.use("/api/categorydata", categoryDataAddedToDbRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/wishlist", wishListRouter);
app.use("/api/auth", authRouter);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(process.env.PORT || Port, () => {
    console.log("Server is running");
  });
});
