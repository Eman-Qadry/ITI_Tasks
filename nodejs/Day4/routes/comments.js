const express = require("express");
const auth = require("../middleware/auth");
const Comment = require("../models/Comment");
const Post = require("../models/Post");

const router = express.Router();

router.post("/", auth, async (req, res) => {
    const { title, postId } = req.body;
    const newComment = new Comment({ title, postId });
    await newComment.save();
    res.status(201).json(newComment);
});


router.get("/", async (req, res) => {
    const comments = await Comment.find().populate("postId");
    res.json(comments);
});


router.put("/:id", auth, async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedComment);
});


router.delete("/:id", auth, async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
});

module.exports = router;
