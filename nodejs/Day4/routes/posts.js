const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const router = express.Router();


router.post("/", auth, async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
});


router.get("/", async (req, res) => {
    const posts = await Post.find().populate("comments");
    res.json(posts);
});


router.put("/:id", auth, async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
});


router.delete("/:id", auth, async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
});

module.exports = router;
