const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const User = require("../models/User");

const router = express.Router();

// validation to register
const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// register Route
router.post("/register", async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error)
        
  return res.status(400).json({ message: error.details[0].message });

    const { name, email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if (user) 
            return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
