import express from "express";
import { getPosts ,createPost } from '../controllers/posts.js';
const router = express.Router();

//not localhost:5000/
//but localhost:5000/posts      

//data from the controller .Function definition is in the controller.
router.get("/", getPosts); 
router.post("/", createPost); 

export default router;