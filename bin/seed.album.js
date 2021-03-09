require("dotenv").config();
require("../config/mongodb");
require("../config/cloudinary")
const mongoose = require("mongoose");
const AlbumModel = require("../models/album");
const ArtistModel = require("../models/artist");


const albums = [

  {
    title: "messengers",
    releaseDate: new Date("19/06/2007"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615215216/albums%20covers/august-cover_z3sml5.jpg",
  },
  {
    title: "wu tang forever",
    releaseDate: new Date("06/03/1997"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217191/albums%20covers/wutang-cover_kycjgo.jpg",
  },
  {
    title: "wasting lights",
    releaseDate: new Date("12/04/2011"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217251/albums%20covers/wastinglights-cover_kbln8z.jpg",
  },
  {
    title: "era vulgaris",
    releaseDate: new Date("12/06/2007"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217473/albums%20covers/eravulgaris-cover_tveaug.jpg",
  },
  {
    title: "rage against the machine",
    releaseDate: new Date("03/11/1992"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615217558/albums%20covers/rageagainst-cover_olir3g.jpg",
  },
  {
    title: "white pony",
    releaseDate: new Date("20/06/2000"),
    // artist: null,
    cover: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615222314/albums%20covers/Whitepony-cover_kp3wvu.jpg",
  },
];

/*
async function insertArtists() {
  try {
    await AlbumModel.deleteMany();
    const inserted = await ArtistModel.insertMany(artists);
    console.log ('seed artist ok : ${inserted.length} documents inserted !`);
  }catch (err) {
    console.error(error);
  }
})() */
