import { Router } from "express";
import { featuredPosts } from "../controller/posts/postController.js";
const router = Router();

router.get('/', featuredPosts);

export default router;