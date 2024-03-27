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
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

// Routes//
app.use("/api/movies", require("./routes/movieRouter.js"));
app.use("/api/tvshows", require("./routes/tvshowRouter.js"));

// Error handling //
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ error: err.message });
});
