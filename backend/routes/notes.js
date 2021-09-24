const express = require("express");
const router = express.Router();

// Import Schema
const Notes = require("../models/Notes");

// Import middleware fetchUserDetails to fetch user from JWT token
const fetchUserDetails = require("../middleware/fetchUserDetails");

// Recieve app.use route request
// Send all notes from specific user get request : /fetchuser
router.get('/fetchallnotes' , fetchUserDetails , async(req,res)=>{
    try {
        const userID = req.user.id;
        const notes = await Notes.find({user : userID});+

        // Send all notes to server
        res.send({notes});

    } catch (error) {
        // Run if any error occurs in last
        res.status(500).send("Internal Server try after some time2");
        console.error(error.message);
    }
});

module.exports = router;
