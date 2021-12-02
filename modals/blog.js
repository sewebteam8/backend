import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    name : String,
    message : String,
    tags : String,
    title : String,
    email : String,
    },
    {
        timestamps: true
});

const blog = mongoose.model('Blog', blogSchema);

export default blog;