const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  description: String,
  label: {
    name: String,
    city: String,
    country: String,
    logo: {
      type: String,
      default:
        "",
    },
  },
  styles: [{ type: Schema.Types.ObjectId, ref: "style" }],
  picture: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
  },
});

const ArtistModel = mongoose.model("artist", artistSchema);

module.exports = ArtistModel;
