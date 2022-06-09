const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");
const PORT = process.env.PORT || 2120;
const app = express();
const userRoute = require("./router/userRouter");
const diaryRoute = require("./router/diaryRouter");

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Server Up!...");
});

app.use("/api/diary", userRoute);
app.use("/api/userdiary", diaryRoute);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
