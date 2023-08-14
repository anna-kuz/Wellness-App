const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({

    subject: { type: String, required: false },
    entry: { type: String, required: true }
},
{ timestamps: true }
);

module.exports = mongoose.model('Entry', entrySchema);

