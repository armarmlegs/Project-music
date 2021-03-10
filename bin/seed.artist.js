require("dotenv").config();
require("../config/mongodb");
const ArtistModel = require("../models/artist");

const artists = [
  {
    name: "August Burns Red",
    description: "Hailing from the deepest corner of Mariana's Trench, melodic and brutal",
    label: {
        name: "Solid-State",
        city: "Seattle",
        country: "usa",
        logo: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214221/logos/solidstate_yldmlj.jpg"
      
    },
    band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299690/pictures%20%28bands%29/august-picture_bkftwh.jpg",
},
  {
    name: "Wu Tang Clan",
    description: "You best protect Ya Neck",
    label: {
        name: "Loud",
        city: "santa-monica",
        country: "usa",
        picture: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214353/logos/loud-records_z5so7s.jpg",
  },
  band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299772/pictures%20%28bands%29/wutang-picture_bacqax.jpg",
},
  {
    name: "Foo Fighters",
    description: "alternative hard rock",
    label: {
        name: "Rca",
        city: "new_york",
        country: "usa",
        picture: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214569/logos/rca-logo_l9ljcf.png",
  },
  band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299705/pictures%20%28bands%29/foofighters-picture_otjvd1.jpg",
},
  {
    name: "Queens Of The Stone Age",
    description: "No One Knows",
    label: {
        name: "matador-records",
        city: "london",
        country: "uk",
        picture: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214687/logos/matador-logo_rc0ge7.jpg",
  },
  band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299741/pictures%20%28bands%29/qotsa-picture_wzz7ma.jpg",
},
  {
    name: "Rage Against The Machine",
    description: "Sleep now in a fireeeeee",
    label: {
        name: "Epic-records",
        city: "new_york",
        country: "usa",
        picture: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615214773/logos/epic-logo_y8lcbt.png",
  },
  band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299725/pictures%20%28bands%29/rage-picture_ewnyya.jpg",
},
  {
    name: "Deftones",
    description: "alternative metal",
    label: {
      name: "Warner",
      city: "new_york",
      country: "usa",
      picture: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615221861/logos/warner-logo_jpi7c2.png"
},
band: "https://res.cloudinary.com/dp9nyuimq/image/upload/v1615299808/pictures%20%28bands%29/deftones-picture_o1r0gn.webp",
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