const mongoose = require('mongoose');
const {Schema} = mongoose;

const SignUpSchema = new Schema({
    user_id : {
        type : String
    },
    name : {
        type : String
    },
    organizatin : {
        type : String
    },
    designation : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    }
})

const District = mongoose.model("SignUpSchema", SignUpSchema);
module.exports = District;