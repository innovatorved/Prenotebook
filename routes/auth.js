const express = require("express");
const router = express.Router();

// Import Schema
const User = require("../models/User");

// Express Validation
const { body, validationResult } = require("express-validator");

// import bcrypt for  Encyption in passwords
const bcrypt = require("bcryptjs");

// Use JWT - Json Web Token to Authenticate the User
const jwt = require("jsonwebtoken");
// -- we send 2 parts key and data
const JWT_key = process.env.JWT_TOKEN; // Store in the form og gitpod variable
// JWT_TOKEN

// Import middleware of getuser that extract info from JWT
const fetchUser = require("../middleware/fetchUserDetails");

// Recieve app.use route request
// Route 1 : user post metheod /api/auth/createuser
router.post(
  "/createuser",
  [
    // Verify the validation
    body("name", "Enter minimum 3 character in Name").isLength({ min: 3 }),
    body("username", "Username is minimum 6 digit").isLength({ min: 6 }),
    body(
      "email",
      "Wrong Email Pattern , Enter a valid Email Address",
    ).isEmail(),
    body("password", "Minimum password length is 6").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // console.log("try to create the user");
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      // check error after validation
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // Verifying email and username not present in db
      let userE = await User.findOne({ email: req.body.email });
      let userU = await User.findOne({ username: req.body.username });
      if (userE) {
        success = false;
        return res.status(400).json({
          success,
          error: "User with samee email id already Registered",
        });
      }
      if (userU) {
        success = false;
        return res.status(400).json({
          success,
          error: "User with samee username already Registered",
        });
      }

      // Create secure hhassed password from password
      // --- genrate salt
      var salt = await bcrypt.genSaltSync(10);
      var secPass = await bcrypt.hashSync(req.body.password, salt); // hash password

      //Creating the user
      let user = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: secPass,
      });

      // Send back username and email if user were created
      // res.json({
      //   info: "User Created Successfully",
      //   USER: {

      //     username: user.username,
      //     email: user.email
      //   }
      // });
      /* Place of sendin user details we send jwt */
      // Sign token
      const data = {
        user: {
          id: user.id,
        },
      };
      let authtoken = jwt.sign(data, JWT_key);
      success = true;
      res.json({ success, authtoken });

      // console.log(req.body);
    } catch (err) {
      // Run if any error occurs in last
      success = false;
      res
        .status(500)
        .json({ success, error: "Internal Server try after some time" });
      console.error(err.message);
    }
  },
);

// Route 2 : Authenticate a User : Login
router.post(
  "/login",
  [
    body(
      "email",
      "Wrong Email Pattern , Enter a valid Email Address",
    ).isEmail(),
  ],
  async (req, res) => {
    // if Email is Wrong then make the error request
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        // If user not exists it send Bad request 400
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with Correct Credentials",
        });
      }
      // Check the password
      const passwordCompare = await bcrypt.compare(password, user.password);

      /*
      console.log(user.password)
      console.log(password);
      console.log(passwordCompare);
    */

      if (!passwordCompare) {
        // If password wrong send Bad request 400
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with Correct Credentials",
        });
      }

      /* Sending jwt token */
      // Sign token
      const data = {
        user: {
          id: user.id,
        },
      };
      let authtoken = jwt.sign(data, JWT_key);
      success = true;
      res.json({ success, authtoken });
    } catch (err) {
      // Run if any error occurs in last
      success = false;
      res.status(500).send({ success, error: "Internal Server Error" });
      console.error(err.message);
    }
  },
);

// Route 3 : Post metheod /getUser : Get user details
router.post("/getuser", fetchUser, async (req, res) => {
  console.log(req.user.id); // Id of User
  try {
    const userID = req.user.id;
    const userDetails = await User.findById(userID).select("-password");
    res.send(userDetails);
  } catch (err) {
    // Run if any error occurs in last
    res.status(500).send("Internal Server try after some time2");
    console.error(err.message);
  }
});

router.put("/checkusername/:username", async (req, res) => {
  try {
    let user = await User.findOne({ username: req.params.username });
    if (user) {
      return res.json({ res: true });
    } else {
      return res.json({ res: false });
    }
  } catch (e) {
    res.status(500).send("Problem to checking in username");
  }
});

module.exports = router;
