const Express = require("express");
const Post = require('../models/posts');
const router = Express.Router();

router.delete("/",(req,res)=>{
    Post.deleteMany({}, function (err) {
        if (err) return handleError(err);
      });
    res.send("All posts deleted!");
})

router.delete("/:id",(req,res)=>{
    Post.deleteOne({id: req.params.id}, function(err){
        if(err) return handleError(err);
    })
    res.send(`post ${req.params.id} deleted!`);
})

module.exports = router;