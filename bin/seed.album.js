require("dotenv").config();
require("./../config/mongodb");
// require("../config/cloudinary")
// const mongoose = require("mongoose");
const AlbumModel = require("./../models/album");
const ArtistModel = require("./../models/artist");

const albums = [
  {
    title: "Messengers",
    releaseDate: new Date("06/19/2007"),
    
artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615215216/albums%20covers/august-cover_z3sml5.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314369/home%20photos/a3_vtxxad.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314356/home%20photos/a2_gzbetn.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314350/home%20photos/a1_x0xs0a.jpg",
    ],
  },
  {
    title: "Wu Tang Forever",
    releaseDate: new Date("03/06/1997"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217191/albums%20covers/wutang-cover_kycjgo.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314209/home%20photos/w2_g5wwew.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314203/home%20photos/w1_sfssmv.jpg",
    ],
  },
  {
    title: "Wasting Lights",
    releaseDate: new Date("04/12/2011"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217251/albums%20covers/wastinglights-cover_kbln8z.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313497/home%20photos/f3-home_gbrmhk.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313489/home%20photos/f2-home_hugcph.jpg",
    ],
  },
  {
    title: "Era Vulgaris",
    releaseDate: new Date("06/12/2007"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217473/albums%20covers/eravulgaris-cover_tveaug.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313716/home%20photos/q3_lhtji1.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313705/home%20photos/q2_n4tfti.png",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313695/home%20photos/q1_bv8au3.jpg",
    ],
  },
  {
    title: "Rage Against The Machine",
    releaseDate: new Date("11/03/1992"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217558/albums%20covers/rageagainst-cover_olir3g.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313907/home%20photos/r1_dul5zx.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615313929/home%20photos/r3._srynxa.jpg",
    ],
  },
  {
    title: "White Pony",
    releaseDate: new Date("06/20/2000"),
    artist: null,
    cover:
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615222314/albums%20covers/Whitepony-cover_kp3wvu.jpg",
    otherCovers: [
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314112/home%20photos/d3_o6tv6a.jpg",
      "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615314105/home%20photos/d2_usgwl2.jpg",
    ],
  },
];

(async function insertLabels() {
  console.log("wassup baby we're in the function");
  try {
    console.log("entree dans le try");
    await AlbumModel.deleteMany();
    // empty the album db collection

    const artists = await Promise.all([
      ArtistModel.findOne({ name: "Foo Fighters" }),
      ArtistModel.findOne({ name: "Wu Tang Clan" }),
      ArtistModel.findOne({ name: "August Burns Red" }),
      ArtistModel.findOne({ name: "Queens Of The Stone Age" }),
      ArtistModel.findOne({ name: "Rage Against The Machine" }),
      ArtistModel.findOne({ name: "Deftones" }),
    ]);

    albums[0].artist = artists[0]
    albums[1].artist = artists[1]
    albums[2].artist = artists[2]
    albums[3].artist = artists[3]
    albums[4].artist = artists[4]
    albums[5].artist = artists[5]

    console.log("sortie du try ");

    const inserted = await AlbumModel.insertMany(albums); // insert docs in db
    console.log(`seed albums done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
    console.log("error ");
  }
  console.log("sorti de la function");
})();
