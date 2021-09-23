const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_TOKEN;

const fetchUser = (req , res , next) => {
    // Get a JWT Token and decode this token and genrate id
    // we send JWT_key in the header "auth-token"
    const token = req.header("auth-token");
    

    if (!token){
        res.status(401).send({error : "Authenticate a valid token"});
    }
    try {
        const userDetail = jwt.verify(token , JWT_KEY);
        req.user = userDetail.user;
        next();
        
    } catch (err) {
        // Run if any error occurs in last
        res.status(500).send("Internal Server try after some time2");
        console.error(err.message);
    }
}

module.exports = fetchUser;