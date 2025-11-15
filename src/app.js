import express from "express"
import categoriasRoutes from "./routes/categorias.routes.js"

// Asignamos a app toda la funcionalidad 
const app = express()

app.set("port", 5000);

/* Routes */
app.use("/api/categorias", categoriasRoutes)

export default app