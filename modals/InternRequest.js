import mongoose from "mongoose";
const InternRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    city: { type: String },
    desc: { type: String },
    phonenumber: { type: Number },
    duration: { type: String },
    technologies: { type: String },
    stipend: { type: String },
});
const InternRequest = mongoose.model("InternRequest", InternRequestSchema);
    
    