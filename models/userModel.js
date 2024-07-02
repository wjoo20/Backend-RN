const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Porfavor agregue el nombre"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Porfavor agregue el email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Porfavor agregue la contraseña"],
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
