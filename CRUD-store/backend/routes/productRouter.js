const express = require("express");
const productRouter = express.Router();
const Inventory = require("../models/inventoryModel");

// get all inventory
productRouter.get("/", (req, res, next) => {
  Inventory.find({})
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((error) => {
      next(error);
    });
});

// get one product
productRouter.get("/:productId", (req, res, next) => {
  const { productId } = req.params;
  Inventory.findById(productId)
    .then((foundProduct) => {
      if (!foundProduct) {
        res.status(404).send({ message: "product not found" });
      } else {
        res.status(200).send(foundProduct);
      }
    })
    .catch((error) => {
      next(error);
    });
});

// get by category
productRouter.get("/search/category", (req, res, next) => {
  Inventory.find({ category: req.query.category })
    .then((products) => {
      return res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Post one
productRouter.post("/", (req, res, next) => {
  Inventory.create(req.body)
    .then((newProduct) => {
      res.status(200).send(newProduct);
    })
    .catch((error) => {
      next(error);
    });
});

// search category
productRouter.get("/category", (req, res, next) => {
  Inventory.find({ category: req.query.category })
    .then((products) => {
      return res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

productRouter.put("/:productId", (req, res, next) => {
  const { productId } = req.params;
  Inventory.findByIdAndUpdate(productId, req.body)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ message: "product not found" });
      }
      Inventory.findById(productId)
        .then((updatedProduct) => {
          res.status(200).send(updatedProduct);
        })
        .catch(() => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

productRouter.delete("/:productId", (req, res, next) => {
  const { productId } = req.params;
  Inventory.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ message: "product not found" });
      }
      res.status(200).send(product);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = productRouter;
