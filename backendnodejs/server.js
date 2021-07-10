// import http from 'http';
// import { Server } from 'socket.io';
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../backendnodejs/models/usermodel.js";
import Product from "../backendnodejs/models/productmodel.js";
import data from "./data";
const { ObjectID } = require("mongodb");
var userid;

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/mobile", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.use('/api/users', (req, res) => {
//   const CreatedUser= User.insertOne()
// })

app.get("/api/products", (req, res) => {
  // res.send(data.products);
  Product.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.post("/login", (req, res) => {
  User.find({ email: req.body.email })
    .then((response) => {
      var currU = response[0];
      userid = ObjectID(currU._id);
      if (currU == undefined) {
        res.send("failed");
      }

      if (req.body.password === currU.password) {
        res.send("Success");
        // return;
      } else {
        res.send("failed");
      }
    })
    .catch((err) => console.log(err));
});

app.get("/addproducts", async (req, res) => {
  // await User.remove({});
  const createdUsers = await Product.insertMany(data.products);
  res.send({ createdUsers });
});

app.get("/addusers", async (req, res) => {
  // await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

app.post("/register", (req, res) => {
  console.log("Hi frm server inside register ", req.body)
  const temp = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  temp
    .save()
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});

app.post("/delete", (req, res) => {
  User.deleteOne({ _id: userid })
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});

app.post("/updatename", (req, res) => {
  User.updateOne({ _id: userid }, { $set: { name: req.body.name } })
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});
app.post("/updatephone", (req, res) => {
  console
  User.updateOne({ _id: userid }, { $set: { phone: req.body.phone } })
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});
app.post("/updateemail", (req, res) => {
  User.updateOne({ _id: userid }, { $set: { email: req.body.email } })
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});
app.post("/updatepassword", (req, res) => {
  User.updateOne({ _id: userid }, { $set: { password: req.body.password } })
    .then((response) => res.send("Success"))
    .catch((err) => res.send("Failed"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
