const express = require("express");
const router = new express.Router();
const ArtistModel = require("./../models/artist");
const uploader = require("./../config/cloudinary");
const protectRoute = require("./../middlewares/thisProtector");

// GET - Trouver les artists
router.get("/", protectRoute, async (req, res, next) => {
  try {
    res.render("dashboard/artists", { artists: await ArtistModel.find() });
  } catch (err) {
    next(err);
  }
});

// GET - Créer avec le form
router.get("/create", async (req, res, next) => {
  res.render("dashboard/artistCreate");
});

// GET - UPDATE AVEC UN FORM
router.get("/update/:id", async (req, res, next) => {
  try {
    res.render("dashboard/artistUpdate", await ArtistModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// GET - EFFACER AVEC ID 
router.get("/delete/:id", async (req, res, next) => {
  try {
    await ArtistModel.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard/artist");
  } catch (err) {
    next(err);
  }
});

// POST - CREER UN ARTIST
router.post("/", uploader.single("picture"), async (req, res, next) => {
  const newArtist = { ...req.body };

  if (!req.file) newArtist.picture = undefined;
  else newArtist.picture = req.file.path;
  newArtist.isBand = req.body.isBand === "on";

  try {
    await ArtistModel.create(newArtist);
    res.redirect("/dashboard/artist");
  } catch (err) {
    next(err);
  }
});

// POST - UPDATER UN ARTIST
router.post("/:id",
  uploader.single("picture"),
  async (req, res, next) => {
    try {
      const artistToUpdate = { ...req.body };
     // if (req.file) artistToUpdate.picture = req.file.path;
    //  artistToUpdate.isBand = req.body.isBand === "on";

      await ArtistModel.findByIdAndUpdate(req.params.id, artistToUpdate);
      res.redirect("/dashboard/artist");
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
