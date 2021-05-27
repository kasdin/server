import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RacePointSchema = new Schema({
    racePointId: {
        type: Number,
        required: true,
        unique: true
    },

    type: {
        type: String,
        required: true  
    },

    firstLongtitude: {
        type: Number,
        required: true
    },

    firstLatitude: {
        type: Number,
        required: true
    },

    secondLongtitude: {
        type: Number, 
        required: true
    },

    secondLatitude: {
        type: Number,
        required: true
    },

    eventId: {
        type: Number,
        required: true
    },

    racePointNumber: {
        type: Number,
        required: true
    }

});