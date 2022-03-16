const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user = new schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

const exporting = mongoose.model('user',user);

module.exports = exporting;
