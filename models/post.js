import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    size: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;