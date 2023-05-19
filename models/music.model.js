const mongoose = require('mongoose');

const musicModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true 
    },
    description: {
        type: String,
    },
    date: {
        type: String
    },
    axel: {
        type: String
    }
});

module.exports = mongoose.model("music", musicModel);