import mongoose from 'mongoose';
const ExamFormDataSchema = new mongoose.Schema({
    examId: {
        type: String
    },
    examName: {
        type: String
    },
    examDate: {
        type: String
    },
    examTime: {
        type: String
    },
    examDuration: {
        type: String
    },
    examVenue: {
        type: String
    },
    examFee: {
        type: String
    }
});
const ExamFormData = mongoose.model('ExamFormData', ExamFormDataSchema);
    
