const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // Title of the post
  title: { type: String, required: true, unique: true },
  // Content of the post
  content: { type: String, required: true },
  // Category of the post
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  theDesiredAmount: { type: Number, required: true },
  // Owner of the post (user who created the post)
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // Completed percentage of the amount
  completedPercentage: { type: Number, default: 0 },
  // Attachments to the post (photo or video)
  attachments: [{ type: String }], // TODO
  // Button to initiate a chat with the owner's post
  chatButton: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
