var express = require('express');
var router = express.Router();
const AlbumModel = require("./../models/album");
// const protectRoute = require("./../middlewares/thisProtector")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const Albums = await  AlbumModel.find();
  res.render('index', { Albums });
});

router.get('index',async (req, res, next) => {
  const Albums = await  AlbumModel.find();
  res.render("index", { Albums });
});

// router.get("/create", async (req, res, next) => {
//   const artists =  await ArtistModel.find();
//   res.render("dashboard/albumCreate", { artists });
// });



module.exports = router;
