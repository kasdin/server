import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    eventId:{
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    eventStart: {
        type: Date,
        default: Date.now,
        required: true
          
    },

    eventEnd: {
        type: Date,
        default: Date.now,
        required: true
         
    },

    city: {
        type: String,
        required: true
    },

    eventCode: {
        type: String, 
        required: true
    },

    actualEventStart: {
        type: Date,
        default: Date.now,
        required: true
    },

    isLive: {
        type: Boolean,
        required: true
    }

});