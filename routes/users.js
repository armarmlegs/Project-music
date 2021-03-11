var express = require("express");
var router = express.Router();
const userModel = require("./../models/user");
const uploader = require("./../config/cloudinary");

//User page
router.get("/profile", async function (req, res, next) {
  try {
    res.render("Profile", {
      users: await userModel.findOne().populate("favesArtist favesAlbum "),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/profileUpdate/:id", async (req, res, next) => {
  try {
    res.render("ProfileUpdate", await userModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

//localhost:3000/
router.post("/profile", async (req, res, next) => {
  console.log("router post")
  try {
    console.log("entree dans le try", req.params.id)
    const userToUpdate = { ...req.body };
    console.log (userToUpdate)
    await userModel.findByIdAndUpdate(req.params.id, userToUpdate);
    res.redirect("/profile");
  } catch (err) { 
    console.log(err)
    next(err);
  }
});

module.exports = router;
