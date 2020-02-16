const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    searchstate: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const StateSearch = mongoose.model("StateSearch", StateSchema);

module.exports = StateSearch;
