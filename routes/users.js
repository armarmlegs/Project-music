var express = require("express");
var router = express.Router();
const userModel = require("./../models/user");
const uploader = require("./../config/cloudinary");
const protectRoute = require("./../middlewares/thisProtector");

//User page
router.get("/profile", async function (req, res, next) {
  console.log(req.session)
  try {
    res.render("Profile", {
      users: await userModel.findById(req.session.currentUser._id).populate("favesArtist favesAlbum "),
    
    });
  } catch (error) {
    next(error);
  }
});

router.get("/profileUpdate/:id", protectRoute,  async (req, res, next) => {
  try {
    res.render("ProfileUpdate", await userModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});




router.post("/profile/:id", protectRoute, async (req, res, next) => {
  console.log("router post")
  try {
    console.log("entree dans le try", req.params.id)
    const userToUpdate =  { ...req.body };
    console.log(req.body)
    console.log (userToUpdate)
    const toto = await userModel.findByIdAndUpdate(req.params.id, userToUpdate, {new:true});
    console.log("totoleretour")
    console.log("----------------",toto)
    res.redirect("/profile");
  } catch (err) { 
    console.log(err)
    next(err);
  }
});





module.exports = router;
