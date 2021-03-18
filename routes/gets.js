const Express = require("express");
const Post = require("../models/posts");
const router = Express.Router();

router.get("/",async (req,res)=>{
    const posts = await Post.find();
    res.json(posts);
})

router.get("/:category",async (req,res)=>{
    const posts = await Post.find({category: req.params.category});
    res.json(posts);
})

module.exports = router;