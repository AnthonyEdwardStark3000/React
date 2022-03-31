import express from "express";
import {getPosts, createPost} from '../controllers/posts.js';


// not work with localhost:5000/
// work with localhost:5000/posts bcz of index.js express.use

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;