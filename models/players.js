const mongoose = require("mongoose");



const PlayerSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const Player = module.exports = mongoose.model("Player", PlayerSchema);