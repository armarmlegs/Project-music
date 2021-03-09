require("dotenv").config();
require("../config/mongodb");
require("../config/cloudinary")
const ArtistModel = require("../models/artist");

const artists = [
  {
    name: "august burns red",
    description: "american metalcore",
    label: {
        name: "solid-state",
        city: "seattle",
        country: "usa",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214221/logos/solidstate_yldmlj.jpg",
    },
},
  {
    name: "wu tang clan",
    description: "a legendary hip hop crew",
    label: {
        name: "loud",
        city: "santa-monica",
        country: "usa",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214353/logos/loud-records_z5so7s.jpg",
  },
},
  {
    name: "foo fighters",
    description: "alternative hard rock",
    label: {
        name: "rca",
        city: "new_york",
        country: "usa",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214569/logos/rca-logo_l9ljcf.png",
  },
},
  {
    name: "queens of the stone age",
    description: "stoner alternative rock",
    label: {
        name: "matador-records",
        city: "london",
        country: "uk",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214687/logos/matador-logo_rc0ge7.jpg",
  },
},
  {
    name: "rage against the machine",
    description: "rap metal",
    label: {
        name: "epic-records",
        city: "new_york",
        country: "usa",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214773/logos/epic-logo_y8lcbt.png",
  },
},
  {
    name: "deftones",
    description: "alternative metal",
    label: {
      name: "warner",
      city: "new_york",
      country: "usa",
      logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615221861/logos/warner-logo_jpi7c2.png"
},
  },
];
(async function insertLabels() {
  try {
    await ArtistModel.deleteMany(); // empty the styles db collection
    const inserted = await ArtistModel.insertMany(artists); // insert docs in db
    console.log(`seed artists ok : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();