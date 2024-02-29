// Importa el módulo Router de Express y el controlador de blogs
import { Router } from "express";
import blogsController from "../controllers/blogs.controller.js";

// Crea una instancia del enrutador
const router = Router();

// Rutas para la gestión de blogs
router.get("/blogs", blogsController.getBlogs);
router.get("/blogs/:id", blogsController.getBlog);
router.post("/blogs", blogsController.saveBlog);

export default router;
