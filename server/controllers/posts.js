import PostMessage from "../models/postMessage.js";

export const getPosts = async ( req , res) => {
    try {
        const postMessages = await PostMessage.find();
        if (postMessages.length > 0) {
            res.status(200).json({status: 200 , message: "Post Messages Retrieved" , postMessages });
        } else {
            res.status(200).json({status: 200 , message: "No Post Messages Found" });
        }
    } catch (error) {
        res.status(500).json({status: 500 , message: "Internal Server Error" , error: error});
    }
}

export const createPosts = async ( req , res) => {
    try {
        res.send('this works');
    } catch (error) {
        res.status(500).json({status: 500 , message: "Internal Server Error" , error: error});
    }
}