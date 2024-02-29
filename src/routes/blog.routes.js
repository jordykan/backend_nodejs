import { Router } from "express";
import blogsController from "../controllers/blogs.controller.js";

const router = Router();

router.get("/blogs", blogsController.getBlogs);
router.get("/blogs/:id", blogsController.getBlog);
router.post("/blogs", blogsController.saveBlog);

export default router;
