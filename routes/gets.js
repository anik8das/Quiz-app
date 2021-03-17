const Express = require("express");
const router = Express.Router();

router.get("/",(req,res)=>{
    res.send("Hello there!");
})

router.get("/home",(req,res)=>{
    res.send("Welcome home");
})

module.exports = router;