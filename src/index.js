import express from "express";
import blogRoutes from "./routes/blog.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", blogRoutes);
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});

export default app;
