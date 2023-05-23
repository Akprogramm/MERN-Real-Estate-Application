const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const signupSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    state: {
        type: String,
        require: true
    },
   
    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

});

module.exports = mongoose.model('signupSchema', signupSchema);