const mongoose = require('mongoose');
const {Schema} = mongoose;

const StateSchema = new Schema({
    state_id: {
        type: String
    },
    state_name: {
        type: String
    }
})

const State = mongoose.model("StateSchema", StateSchema);
module.exports = State;