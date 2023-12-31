import express from 'express';
import { getPosts , createPosts } from '../controllers/posts.js';



const router = express.Router();

router.get('/posts' , getPosts);
router.post('/createPost' , createPosts);

export default router;