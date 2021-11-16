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
        res.send(notes);

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
    body('description', "Minimum 10 characters neccessary in Description").isLength({ min: 10 }),
], async(req , res)=>{
    // console.log(req.body);
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // check error after validation
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        const userID = req.user.id;
        const {title , description , tag} = req.body;
        let notes = new Notes({title , description , tag , user : userID});
        let saveNote = await notes.save();
        success = true;
        return res.json({success , saveNote});
        
    } catch (error) {
        // Run if any error occurs in last
        success = false;
        return res.status(500).json({success,"error":"Internal Server try after some time2"});
        // console.error(error.message);
    }
});

// Update Notes endpoint : /updatenote

router.put("/updatenote/:id" , fetchUserDetails , async(req , res) => {
    try {
        
        const RecNoteId = req.params.id;    // Parameter is note id sent by client
        let note = await Notes.findById(RecNoteId); // Check the note in database by id
        if(!note){return res.status(404).send("Note not Found")};   // Check note existence

        const NoteUser = note.user.toString(); // change user object to string
        const ReqFromUser = req.user.id;

        if (NoteUser !== ReqFromUser){return res.status(401).send("UnAuthorished Access")};// Check the owner of note is real

        const { title , description , tag } = req.body;
        const updateDetails = {};

        if(title){updateDetails.title = title};
        if(description){updateDetails.description = description};
        if(tag){updateDetails.tag = tag};
        // console.log(updateDetails);
        // Update the note using Notes Schema
        UpdateNote1 = await Notes.findByIdAndUpdate(RecNoteId , {$set : updateDetails} , {new:true});
        return res.json({UpdateNote1});

    } catch (error) {
        // Run if any error occurs in last
        return res.status(500).send("Internal Server try after some time2");
        console.error(error.message);
    }
})

// Delete a note using DELETE reqest login required: /deletenote/:id
router.delete("/deletenote/:id" , fetchUserDetails , async(req , res) => {
    try {
        
        const RecNoteId = req.params.id;    // Parameter is note id sent by client
        let note = await Notes.findById(RecNoteId); // Check the note in database by id
        if(!note){return res.status(404).send("Note not Found")};   // Check note existence

        const NoteUser = note.user.toString(); // change user object to string
        const ReqFromUser = req.user.id;
        if (NoteUser !== ReqFromUser){return res.status(401).send("UnAuthorished Access")};// Check the owner of note is real
        // res.send("Details verified");

        delNote = await Notes.findByIdAndDelete(RecNoteId);
        return res.json({"Delete" : "Note HAs Been Deleted"});

    } catch (error) {
        // Run if any error occurs in last
        return res.status(500).send("Internal Server try after some time2");
        console.error(error.message);
    }
})

module.exports = router;