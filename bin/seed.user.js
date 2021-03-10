require("dotenv").config();
require("../config/mongodb");
const userModel = require("../models/user");

const user = [
  {
    username: "MasterKey",
    password: "keyup",
    email: "master@key.key",
    role: "admin",
    avatar: "",
    favesArtist: null,
  },
];

(async function insertLabels() {
  try {
    await userModel.deleteMany(); // empty the styles db collection
    const inserted = await userModel.insertMany(user); // insert docs in db
    console.log(`seed user ok : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
