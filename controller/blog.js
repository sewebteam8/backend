import Blog from "../modals/blog.js";

export const newPost = async (req,res) => {
	try{
		const post = await Blog(req.body);
		const addedpost = await new Blog(req.body).save();
		res.status(200).json({message : "added"});
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}


export const updatePost = async (req,res) => {
	try{
		let id = req.body.id;
		const post = await Blog.findById(id);
		if(post.length == 0){
			res.satus(404).json({message : "post no found"});
		}
		else{
			post.name = req.body.name;
			post.message = req.body.message;
			post.title = req.body.title;
			post.tags = req.body.tags;
			const updatedpost = await post.save();
			res.status(200).json({message : "updated"});
		}
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}


export const deletePost = async (req,res) => {
	try{
		let id = req.body.id;
		const post = await Blog.findById(id);
		if(post.length == 0){
			res.satus(404).json({message : "post no found"});
			return;
		}
		else{
			await Blog.deleteOne({_id : id});
			res.status(200).json({message : "deleted"});
		}
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}


export const getPost = async (req,res) => {
	try{
		const post = await Blog.find();
		if(post.length == 0){
			res.satus(404).json({message : "post no found"});
			return;
		}
		else{
			res.status(200).json(post);
		}
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}

export const getbyID = async (req,res) => {
	const id = req.params.id;
	try{
		const post = await Blog.find({_id : id});
		if(post.length == 0){
			res.satus(404).json({message : "post no found"});
			return;
		}
		else{
			res.status(200).json(post);
		}
	}
	catch(error){
		res.status(400).json({message : "failed"})
	}
}

