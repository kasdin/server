import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ShipSchema = new Schema({
    shipId:{
        type: Number,
        required: true,
        unique: true
    },

    emailUsername: {
        type: String,
        required: true
        
    },

    name:{
        type: String,
        required: true
    }
});