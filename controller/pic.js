import Pic from "../modals/pic.js";

export const postupload = async (req,res) => {
	try{
        var pp = req.files.pic;
        pp.mv('public/pic/' + pp.name, function (err){
            if(err){
                res.status(400).json({message : "failed"})
            }
            else{
                var obj = {
                    // name : req.body.name,
                    // name : req.body.title,
                    name : pp.name,
                }
                
                const post = Pic(req.body);
		        const addedpost = new Pic(req.body).save();
                res.status(200).json({message : "added"})
            }
        });
        
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}

export const getupload = async (req,res) => {
	try{
		
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}