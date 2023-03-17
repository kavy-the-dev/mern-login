const mongoose = require('mongoose')

const Schema= mongoose.Schema;

const UserSchema = new Schema({
    voter_id:{
        type : String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
        timestamps: true,
        collection: 'voter'
    }
);

module.exports = mongoose.model('user',UserSchema)

