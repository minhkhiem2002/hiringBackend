const mongoose = require('mongoose')

const sportFieldSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        owner: {type: String, required: true},
        address: {type: String, required:true},
        image: {type: String, required: true},
        type: [{type: String, required: true}],
        price: {type: String, required: true},
        description: {type: String},
    },
    {
        timestamps: true,
    }
);

const SportField = mongoose.model('SportField', sportFieldSchema);
module.exports = SportField;