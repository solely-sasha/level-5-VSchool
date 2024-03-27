const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const pantryRouter = require("./routes/pantryRouter");
const volunteerRouter = require("./routes/volunteerRouter");

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", pantryRouter);
app.use("/api", volunteerRouter);

mongoose.connect(process.env.URI).then(() => {
  app.listen(4000, () => {
    console.log("connected to the database and listening on port 4000");
  });
});
