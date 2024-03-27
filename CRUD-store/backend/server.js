const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json()); // looks for a request body and turns it into req.body
app.use(morgan("dev")); // logs requests to the console

// connect to the database //
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen on port
    app.listen(5000, () => {
      console.log("connected to DB and listening on port 5000");
    });
  })
  .catch((err) => console.log(err.message));

app.use("/api/products", require("./routes/productRouter"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ error: err.message });
});
