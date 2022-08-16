import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";
// ap config

const app = express();
const port = process.env.PORT || 8000;
const url =
  "mongodb+srv://zebi123:zebi123@cluster0.waxrrel.mongodb.net/?retryWrites=true&w=majority";
// middle wares
app.use(express.json());
app.use(Cors());
// db config
mongoose.connect(url, {
  useNewUrlParser: true,
});

// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// listeners
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
