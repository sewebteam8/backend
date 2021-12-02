import Pic from "../modals/pic.js";

export const postupload = async (req, res) => {
    console.log("postupload");
	try{
        console.log("postupload1");
        var pp = req.files.pic;
        console.log("postupload21");
        pp.mv('../public/pic/' + pp.name, function (err){
            if(err){
                console.log("postupload2");
                res.status(400).json({message : "failed"})
            }
            else{
                console.log("postupload3");
                var obj = {
                    email : req.body.email,
                    name : pp.name,
                    tags : req.body.tags,
                }
                
                console.log("postupload4");
                const post = Pic(obj);
                console.log(obj);
		        const addedpost = new Pic(obj).save();
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
		const pics = await Pic.find();
		if(pics.length == 0){
			res.satus(404).json({message : "pics no found"});
			return;
		}
		else{
			res.status(200).json(pics);
		}
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}