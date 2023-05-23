const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const dataSchema = new Schema({

    description: {
      type: String,
      require: true
    },
    address: {
        type: String,
        require: true
    },

    phone: {
        type: Number, 
        require: true
    },

    email: {
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
    
    cost: {
        type: Number,
        require: true
    },
    image1: {
        data: Buffer,
        contentType: String
    },
    image2: {
        data: Buffer,
        contentType: String
    },
    image3: {
        data: Buffer,
        contentType: String
    },
    image4: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('dataSchema', dataSchema);