import { Router } from "express";
import { featuredPosts, getContent } from "../controller/posts/postController.js";
const router = Router();

router.get('/', featuredPosts);
router.get('/:slug', getContent)

export default router;