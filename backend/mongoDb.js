// Import Mooongose : a mongodb to js Connector
const mongoose = require("mongoose");

// connection string 
const mongoURI = "mongodb+srv://nodeAppBackend:1ahzt1VhHHJMSNsu@prebackend-node.wykxx.mongodb.net/preNotebookUser?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

// Export "connectToMongo" function
module.exports = connectToMongo;