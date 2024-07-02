const mongoose = require("mongoose");

//schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Porfavor agregue el título"],
    },
    description: {
      type: String,
      required: [true, "Porfavor agregue la descripción"],
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
