const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

module.exports = mongoose.model("Comment", CommentSchema);
