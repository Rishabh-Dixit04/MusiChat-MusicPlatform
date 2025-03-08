import mongoose from 'mongoose';

const mesaageSchema = new mongoose.Schema({
    sensorId: {
        type: String,
        required: true
    },

    receiverId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Message = mongoose.model("Message", mesaageSchema);
