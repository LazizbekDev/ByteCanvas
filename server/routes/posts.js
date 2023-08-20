import { Router } from "express";
import { createPost, featuredPosts, getContent } from "../controller/posts/postController.js";
const router = Router();

router.get('/', featuredPosts);
router.get('/:slug', getContent)
router.post('/:slug', createPost);

export default router;