import nodemailer from 'nodemailer';

export const enquiryMail = (req, res) => {
    console.log(req.body);
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'info.collabb@gmail.com',
                pass : '100200300400',
            }
        })
        
        var mailOptions = {
            from : 'info.collabb@gmail.com',
            to  :  'enquirycollab@gmail.com',
            subject :  'Enquiry/info',
            html : `
                    <h4>Student Name : ${req.body.name_}</h4>
                    <h4>Student Email : ${req.body.email_}</h4>
                    <h4>Subject : ${req.body.sub_}</h4>
                    <h4>Phone : ${req.body.phone_}</h4>
                    <h4>Message/doubt : ${req.body.msg_}</h4>
            `
        }

        transporter.sendMail(mailOptions, function (error,info){
            if(error){
                console.log(error);
                res.status(501).json({message : "error"})
            }
            else{
                res.status(200).json({message : "success"})
            }
        })
    }
    catch(err){
        console.log(err)
    }
}