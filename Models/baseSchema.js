const mongoose=require('mongoose');
const Schema=mongoose.Schema;

function createBase() {
    return new Schema({
        name: {
            title: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            },
        },
        userName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            plotNo:{
                type:String,
            },
            street:{
                type:String,
            },
            district:{
                type:String,
            },
            state:{
                type:String,
            },
            POBox:{
                type:Number
            },
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
        },
        maritalStatus: {
            type: Boolean,
            default: true,
        },
        dob: {
            type: Date,
        },
        bloodGroup: {
            type: String,
        },
        displayPicture: {
            type: String,
        },
        contacts:{
            home:Number,
            office:Number,
            mobile:{
                type:Number,
                required:true,
            },
            other:Number,
        },
        documents:{

            type:String,
        },
        userType:{
            type:String,
            required:true,
        }
    });

}

module.exports=createBase;
