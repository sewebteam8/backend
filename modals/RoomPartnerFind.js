import mongoose from 'mongoose';
const RoomPartnerFindSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    age: {
        type: Number,
    },
    presentaddress: {
        type: String,
    },
    phonenumber: {
        type: Number,
    },
    duration: {
        type: String,
    },

    roomtype: {
        type: String,
    },
});
const RoomPartnerFind = mongoose.model('RoomPartnerFind', RoomPartnerFindSchema);