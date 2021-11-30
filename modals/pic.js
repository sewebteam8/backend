import mongoose from 'mongoose';

const picSchema = new mongoose.Schema({
    name : String,
    tags : String,
    email : String,
    },
    {
        timestamps: true
});

const pic = mongoose.model('Pic', picSchema);

export default pic;