import express, { Router } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import router from "../src/routes/router";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

/********************************************* DATABASE CONFIG ******************************************/
mongoose.connect(
  `${process.env.MONGO_URI}/${process.env.DATABASE}` as string,
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  } as ConnectOptions
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

app.get("/", (req: any, res) => {
  res.send("<h1>Welcome to Liv Fit server</h1>");
});
/****************************************************************** ROUTER *************************************************************************/
app.use(router);

/*********************************************************** UNDEFINED PATH HANDLER ********************************************************/
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.post("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.patch("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.put("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.delete("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

/********************************************* SERVER START ******************************************/
app.listen(port, () => {
  console.log("Server is running on Port :", port);
});
