const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "notes"
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    share :{
        type: Boolean, 
        default: false
    },
    tag : {
        type: String,
        default: "Genral"
    },
    date : {
        type: Date,
        default: Date.now
        
    }
});

module.exports =  mongoose.model('notes' , NotesSchema);