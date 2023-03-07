const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    opration: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Data', dataSchema)