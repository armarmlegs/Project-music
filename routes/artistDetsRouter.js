const express = require("express");
const router = new express.Router();
const AlbumModel = require("./../models/album");
 const ArtistModel = require("./../models/artist");
// const protectAdminRoute = require("./../middlewares/protectAdminRoute");

router.get("/", async (req, res, next) => {
    try {
      res.render("artists", { artists: await ArtistModel.find().populate("label") });
    } catch (err) {
      next(err);
    }
  });
  router.get("/artists/:id", async (req, res, next) => {
    try {
      res.render(
        "artist",
        await ArtistModel.findById(req.params.id).populate("label")
      );
    } catch (err) {
      next(err);
    }
  });

module.exports = router;