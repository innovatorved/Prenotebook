const express = require("express");
const router = express.Router();

// Recieve app.use route request
router.get('/' , (req,res)=>{
    let obj1 = {
        name : "Ved Gupta",
        Num  : 7895124036
    }
    // console.log(req);
    res.json(obj1);
});

module.exports = router;
