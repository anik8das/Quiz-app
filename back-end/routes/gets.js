// importing npm modules
const Express = require("express");
const Post = require("../models/posts");
const router = Express.Router();

// querying all the posts on homepage
router.get("/",async (req,res)=>{
    const posts = await Post.find();
    console.log("Request for all posts");
    res.json(posts);
})

// querying posts of a specific category
router.get("/:category",async (req,res)=>{
    const posts = await Post.find({category: req.params.category});
    console.log("Request for posts of category: "+ req.params.category);
    res.json(posts);
})

module.exports = router;