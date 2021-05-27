import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EventRegistrationSchema = new Schema({
    eventRegId: {
        type: Number,
        required: true,
        unique: true
    },

    shipId: {
        type: Number,
        required: true  
    },

    eventId: {
        type: Number,
        required: true
    },

    trackColor: {
        type: String,
        required: true
    },

    teamName: {
        type: String, 
        required: true
    }

});