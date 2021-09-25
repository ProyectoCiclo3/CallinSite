const express = require("express");
const userRoute = express.Router();

// user model
let userModel = require("../models/user");

userRoute.route("/").get((req, res) => {
  userModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

userRoute.route("/create-user").post((req, res, next) => {
  userModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

userRoute.route("/edit-user/:id").get((req, res) => {
  userModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update user
userRoute.route("/update-user/:id").put((req, res, next) => {
  userModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("User successfully updated!");
      }
    }
  );
});

// Delete user
userRoute.route("/delete-user/:id").delete((req, res, next) => {
  userModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = userRoute;
