import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LocationSchema = new Schema({
    locationId: {
        type: Number,
        required: true,
        unique: true
    },

    eventRegId: {
        type: Number,
        required: true  
    },

    locationTime: {
        type: Date,
        required: true
    },

    longtitude: {
        type: Number,
        required: true
    },

    latitude: {
        type: Number, 
        required: true
    },

    racePointNumber: {
        type: Number,
        required: true
    },

    raceScore: {
        type: Number,
        required: true
    },

    finishTime: {
        type: Date,
        required: true
    }

});