const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const auth=require("./routes/auth")
const posts=require("./routes/posts")
const comments= require("./routes/comments")
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth",auth );
app.use("/api/posts",posts );
app.use("/api/comments",comments);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
