// Importa el módulo Express  y las rutas del blog
import express from "express";
import blogRoutes from "./routes/blog.routes.js";

// Crea una instancia de la aplicación Express
const app = express();
app.use(express.json());
app.use("/api", blogRoutes);
// Configura el puerto de la aplicación, utiliza el puerto proporcionado por el entorno o el puerto 3000
app.set("port", process.env.PORT || 3000);
// Inicia el servidor y escucha en el puerto configurado
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});

export default app;
