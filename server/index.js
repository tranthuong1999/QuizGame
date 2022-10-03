const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
mongoose
  .connect("mongodb://localhost:27017/question", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/api", routes);

    app.listen(8000, () => {
      console.log("Server has started!");
    });
  });
