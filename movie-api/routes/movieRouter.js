const express = require("express");
const movieRouter = express.Router();
const Movie = require("../models/movie.js");

// Get all
movieRouter.get("/", (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.status(200).send(movies);
    })
    .catch((error) => {
      next(error);
    });
});

// Get one
movieRouter.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((foundMovie) => {
      if (!foundMovie) {
        res.status(404).send({ message: "Movie not found" });
      } else {
        res.status(200).send(foundMovie);
      }
    })
    .catch((error) => {
      next(error);
    });
});

// get by genre

movieRouter.get("/search/genre", (req, res, next) => {
  Movie.find({ genre: req.query.genre })
    .then((movies) => {
      return res.status(200).send(movies);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Post one
movieRouter.post("/", (req, res, next) => {
  Movie.create(req.body)
    .then((newMovie) => {
      res.status(200).send(newMovie);
    })
    .catch((error) => {
      next(error);
    });
});

// delete one
movieRouter.delete("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndDelete(movieId)
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({ message: "Movie not found" });
      }
      res.status(200).send(movie);
    })
    .catch((error) => {
      next(error);
    });
});

// update one

movieRouter.put("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndUpdate(movieId, req.body)
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({ message: "Movie not found" });
      }
      Movie.findById(movieId)
        .then((updatedMovie) => {
          res.status(200).send(updatedMovie);
        })
        .catch(() => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

// movieRouter
//   .route("/")
//   .get((req, res) => {
//     res.send(movies);
//   })
//   .post((req, res) => {
//     const newMovie = req.body;
//     newMovie._id = uuidv4();
//     movies.push(newMovie);
//     res.send(`successfully added ${newMovie.title} to the database`);
//   });

module.exports = movieRouter;
