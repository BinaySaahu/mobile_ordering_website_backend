const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

const UserList = new mongoose.model("Users", UserSchema);

module.exports = UserList;
