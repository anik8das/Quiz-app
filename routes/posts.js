// importing dependencies
const Express = require("express");
const Post = require("../models/posts");
const router = Express.Router();

router.use(Express.json()) 

// for handling post requests and pushing it to the MongoDB database
router.post("/", async (req,res)=>{
    console.log(req.body);
    const post = new Post({
        id: req.body.id,
        category: req.body.category,
        question: req.body.question,
        answer: req.body.answer
    });
    const savePost = await post.save().then(data =>{
        res.json(data);
    }).catch(err=>{
        res.json({message: err});
    })
})

// exporting the function
module.exports = router;