const mongoose = require('mongoose')

const userSchema = mongoose.model({
    name : {
        type : 'string',
        required : [true , 'Please add a name']
    },
    email : {
        type : 'string',
        required : [true , 'Please add an email address']
        ,unique : true
    },
    password : {
        type : 'string',
        required : [true , 'Please add a password']
    }
} , {
    timestamps  : true
})

model.exports = mongoose.model('User', userSchema)