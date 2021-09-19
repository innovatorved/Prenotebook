const express = require("express");
const router = express.Router();

// Recieve app.use route request
router.get('/' , (req,res)=>{

    res.json([]);
});

module.exports = router;
