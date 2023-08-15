const express = require("express");
const hotelRouter = require("./hotelRouter");
const app = express();
const Port = 8080;

app.use(express.json())
app.use("/api/hotels", hotelRouter);
app.get("/" , (req, res) => {
     res.send("hehehe");
})

app.listen(Port, ()=> {
    console.log("Server Started")
})