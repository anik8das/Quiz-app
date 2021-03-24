// Importing modules
const Express = require("express");
const Post = require('../models/posts');
const router = Express.Router();

// Route to delete all the posts
router.delete("/",(req,res)=>{
    Post.deleteMany({}, function (err) {
        if (err) return handleError(err);
      });
    res.send("All posts deleted!");
})

// Route to delete a specific post by id
router.delete("/:id",(req,res)=>{
    Post.deleteOne({id: req.params.id}, function(err){
        if(err) return handleError(err);
    })
    res.send(`post ${req.params.id} deleted!`);
})

// Exporting the router
module.exports = router;