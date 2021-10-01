const express = require("express");
const router = express.Router();

// Import Schema
const Notes = require("../models/Notes");

// Express Validation
const { body, validationResult } = require('express-validator');

// Import middleware fetchUserDetails to fetch user from JWT token
const fetchUserDetails = require("../middleware/fetchUserDetails");

// Recieve app.use route request
// Send all notes from specific user get request : /fetchallnotes
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

//create notes : /createnotes
router.post("/createnotes" , fetchUserDetails ,[
    // Verify the validation
    body('title', "Enter minimum 3 character in Title").isLength({ min: 3 }),
    body('description', "Minimum 25 characters neccessary in Description").isLength({ min: 25 }),
], async(req , res)=>{

    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // check error after validation
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const userID = req.user.id;
        const {title , description , tag} = req.body;
        let notes = new Notes({title , description , tag , user : userID});
        let saveNote = await notes.save();
        res.json({saveNote});
        
    } catch (error) {
        // Run if any error occurs in last
        res.status(500).send("Internal Server try after some time2");
        console.error(error.message);
    }
});


module.exports = router;