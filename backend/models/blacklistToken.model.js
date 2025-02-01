const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds    TTL (Time To Live)
  },
});

module.exports = mongoose.model("BlackListToken", blacklistTokenSchema);
