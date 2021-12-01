import mongoose from 'mongoose';
const ExamFormDataSchema = new mongoose.Schema({
    examineeName: {
        type: String,
        required: true
    },
    examName: {
        type: String,
        required: true
    },

    examineeAge: {
        type: Number,
        required: true
    },
    examCityName: {
        type: String,
        required: true
    },
    examDate: {
        type: Date,
        required: true
    },
    examTime: {
        type: String,
        required: true
    },
    examDuration: {
        type: Number,
        required: true
    },

    examVenue: {
        type: String,
        required: true
    },
    examineeAddress: {
        type: String,
        required: true
    }
});


const ExamFormData = mongoose.model('ExamFormData', ExamFormDataSchema);
export default ExamFormData;
