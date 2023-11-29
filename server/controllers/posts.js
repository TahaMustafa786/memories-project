import PostMessage from "../models/postMessage.js";
import Joi from "joi";
import { json2array } from "../functions/functions.js";
const createPostScheme = Joi.object({
    title: Joi.string().required(),
    message: Joi.string().required(),
    creator: Joi.string().required(),
    tags: Joi.string().required(),
    selectedFile: Joi.string().required(),
    likeCount: Joi.string().optional(),
    created_at: Joi.string().optional(),
});

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
        const { error, value } = createPostScheme.validate(req.body);
        if (error) {
            return res
                .status(400)
                .json({ status: "400", message: error.details[0].message });
        }
        const newPost = new PostMessage(value);
        await newPost.save();
        res.status(200).json({status: 200 , message: "Post Created" , post: (value)});
    } catch (error) {
        res.status(500).json({status: 500 , message: "Internal Server Error" , error: error.message});
    }
}