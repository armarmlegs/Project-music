const express = require("express");
const router = new express.Router();
const AlbumModel = require("./../models/album");
 const ArtistModel = require("./../models/artist");
const uploader = require("./../config/cloudinary");
// const protectAdminRoute = require("./../middlewares/protectAdminRoute");
const protectRoute = require("./../middlewares/thisProtector");
const protectAdmin = require("./../middlewares/protectAdmin")

// router.use(protectAdminRoute);

// GET - all albums
router.get("/", protectRoute, async (req, res, next) => {
  try {
    res.render("dashboard/albums", { albums: await AlbumModel.find().populate("artist label") });
  } catch (err) {
    next(err);
  }
});




// GET - create one album (form)
router.get("/create", async (req, res, next) => {
  const artists =  await ArtistModel.find();
  res.render("dashboard/albumCreate", { artists });
});

// GET - update one album (form)
router.get("/update/:id", async (req, res, next) => {
  try {
    res.render("dashboard/albumUpdate", await AlbumModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// GET - delete one album
router.get("/delete/:id", async (req, res, next) => {
  try {
    await AlbumModel.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

// POST - create one album
router.post("/", uploader.single("cover"), async (req, res, next) => {
  const newAlbum = { ...req.body };
  if (!req.file) newAlbum.cover = undefined;
  else newAlbum.cover = req.file.path;

  try {
    await AlbumModel.create(newAlbum);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

// POST - update one album
router.post("/:id", uploader.single("cover"), async (req, res, next) => {
  try {
    const albumToUpdate = { ...req.body };
    if (req.file) albumToUpdate.cover = req.file.path;

    await AlbumModel.findByIdAndUpdate(req.params.id, albumToUpdate);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
