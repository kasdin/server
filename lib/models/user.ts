import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true  
    },

    emailusername: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String, 
        required: true
    }

});