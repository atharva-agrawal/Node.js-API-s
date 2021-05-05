const mongoose = require('mongoose');
const {Schema} = mongoose;

const ChildSchema = new Schema({
    child_id: {
        type: String
    },
    name: {
        type: String
    },
    sex: {
        type: String
    },
    dob: {
        type: String
    },
    father_name: {
        type: String,
    },
    mother_name: {
        type: String
    },
    state_id: {
        type: String
    },
    district_id: {
        type: String
    },
    photo: {
        type: String
    }
})

const Child = mongoose.model("ChildSchema", ChildSchema);
module.exports = Child;