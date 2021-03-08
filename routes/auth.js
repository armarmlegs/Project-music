const express = require("express");
const router = express.Router();

const userModel = require("./../models/user");
const bcrypt = require("bcrypt");

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const newUser = await userModel.findOne({ email: email });
console.log(email)
    console.log("yo");
    if (!newUser) {
      console.log("user unknown");
      res.redirect("/login");
    } else {
      console.log(password);
      console.log(`------ ${newUser.password}-----`);
      const isSamePassword = bcrypt.compareSync(password, newUser.password);
      if (!isSamePassword) {
        console.log(isSamePassword);
        console.log("---------not the same password----");
        res.redirect("/login");
      } else {
        const userObject = newUser.toObject();
        delete userObject.password;
        console.log(req.session);
        req.session.currentUser = userObject;
        res.redirect("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/register", (req, res, next) => {
  res.render("auth/register");
});

router.post("/register", async (req, res, next) => {
  try {
    const newUser = { ...req.body };
    const foundUser = await userModel.findOne({ email: newUser.email });
    if (foundUser) {
      res.redirect("/login");
      console.log("user already exists");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await userModel.create(newUser);
      res.redirect("/login");
      console.log("user created");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
