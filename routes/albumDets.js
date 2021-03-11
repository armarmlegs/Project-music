const express = require("express");
const router = new express.Router();
const AlbumModel = require("./../models/album");
 const ArtistModel = require("./../models/artist");
const uploader = require("./../config/cloudinary");
// const protectAdminRoute = require("./../middlewares/protectAdminRoute");
const protectRoute = require("./../middlewares/thisProtector");

router.get("/", async (req, res, next) => {
    try {
      res.render("albums", { albums: await AlbumModel.find().populate("artist label") });
    } catch (err) {
      next(err);
    }
  });

  router.get("/albums/:id", async (req, res, next) => {
    try {
      res.render(
        "album",
        await AlbumModel.findById(req.params.id).populate("artist label")
      );
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;