require("dotenv").config();
require("./../config/mongodb");
// require("../config/cloudinary")
// const mongoose = require("mongoose");
const AlbumModel = require("./../models/album");
const ArtistModel = require("./../models/artist");

const albums = [
  {
    title: "messengers",
    releaseDate: new Date("06/19/2007"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615215216/albums%20covers/august-cover_z3sml5.jpg",
  },
  {
    title: "wu tang forever",
    releaseDate: new Date("03/06/1997"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217191/albums%20covers/wutang-cover_kycjgo.jpg",
  },
  {
    title: "wasting lights",
    releaseDate: new Date("04/12/2011"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217251/albums%20covers/wastinglights-cover_kbln8z.jpg",
  },
  {
    title: "era vulgaris",
    releaseDate: new Date("06/12/2007"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217473/albums%20covers/eravulgaris-cover_tveaug.jpg",
  },
  {
    title: "rage against the machine",
    releaseDate: new Date("11/03/1992"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217558/albums%20covers/rageagainst-cover_olir3g.jpg",
  },
  {
    title: "white pony",
    releaseDate: new Date("06/20/2000"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615222314/albums%20covers/Whitepony-cover_kp3wvu.jpg",
  },
];

(async function insertLabels() {
  console.log("wassup baby we're in the function");
  try {
    console.log("entree dans le try");
    await AlbumModel.deleteMany();
    // empty the album db collection

    const artists = await Promise.all([
      ArtistModel.findOne({ name: "foo fighters" }),
      ArtistModel.findOne({ name: "wu tang clan" }),
      ArtistModel.findOne({ name: "august burns red" }),
      ArtistModel.findOne({ name: "queens of the stone age" }),
      ArtistModel.findOne({ name: "rage against the machine" }),
      ArtistModel.findOne({ name: "deftones" }),
    ]);

    albums[0].artist = artists[0];
    albums[1].artist = artists[1];
    albums[2].artist = artists[2];
    albums[3].artist = artists[3];
    albums[4].artist = artists[4];
    albums[5].artist = artists[5];

    console.log("sortie du try ");

    const inserted = await AlbumModel.insertMany(albums); // insert docs in db
    console.log(`seed albums done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
    console.log("error ");
  }
  console.log("sorti de la function");
})();
