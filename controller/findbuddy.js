import RoomPartnerFind from '../modals/RoomPartnerFind.js';
import ExamFormData from '../modals/ExamFormData.js';
import InternRequest from '../modals/InternRequest.js';
export const addFindIntern = async (req, res) => {
    try {
        const intern = new InternRequest(req.body);
        await intern.save();
        res.status(200).json(intern);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const addFindRoomPartner = async (req, res) => {
    try {
        const partner = new RoomPartnerFind(req.body);
        await partner.save();
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const addExamRequestForm = async (req, res) => {
    try {
        const exam = new ExamFormData(req.body);
        await exam.save();
        res.status(200).json(exam);
    } catch (error) {
        res.status(500).json(error);
    }
}

