const express = require("express");
const router = express.Router();

// Import Schema
const User = require("../models/User.js");

// // Express Validation
const { body , validationResult } = require('express-validator');

// Recieve app.use route request
// user post metheod /api/auth/createuser
router.post("/createuser" ,[
  // Verify the validation
  body('name' , "Enter minimum 3 character in Name").isLength({ min: 3 }),
  body('username' , "Username is minimum 6 digit").isLength({ min: 6 }),
  body('email' , "Wrong Email Pattern , Enter a valid Email Address").isEmail(),
  body('password' , "Minimum password length is 6").isLength({ min: 6 }),
] , async  (req , res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // check error after validation
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    // Verifying email and username not present in db
    let userE = await User.findOne({email : req.body.email});
    let userU = await User.findOne({username : req.body.username});
    if (userE){
      return res.status(400).json({error : "User with samee email id already Registered"});
    }
    if (userU){
      return res.status(400).json({error : "User with samee username already Registered"});
    }
    
    //Creating the user
    let user = await User.create({
      name: req.body.name,
      username : req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Send back username and email if user were created
    res.json({
      info : "User Created Successfully",
      USER : {
        
        username : user.username,
        email : user.email
      }
    });
    console.log(req.body);
  }catch(err){
    // Run if any error occurs in last
    res.json({error : "Some issue try after some time"});
    console.error(err.message);
  }
});

module.exports = router;