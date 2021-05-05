const mongoose = require('mongoose');
const {Schema} = mongoose;

const DistrictSchema = new Schema({
    state_id: {
        type: String
    },
    district_id: {
        type: String
    },
    district_name: {
        type: String
    }
})

const District = mongoose.model("DistrictSchema", DistrictSchema);
module.exports = District;