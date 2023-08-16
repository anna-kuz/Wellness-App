// Require the Mongoose package
const mongoose = require('mongoose');


// Create a schema to define the properties of the album collection
const detailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: false, max: 100},
    gender: { type: String, required: false },
    height: { type: String, required: false },
    weight: { type: Number, required: false },
    created: { type: Date, default: Date.now }
});

// export the schema as a Monogoose model. 
module.exports = mongoose.model('Detail', detailSchema);