import mongoose from 'mongoose';

const BlogConnection = async () => {
  try {
        await mongoose.connect("mongodb+srv://talha:talha@cluster0.78pjy.mongodb.net/blog?retryWrites=true", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        console.log('Blog Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
    
};

export default BlogConnection;