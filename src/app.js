import express from "express"
import categoriasRoutes from "./routes/categorias.routes.js"
import cors from "cors"

// Asignamos a app toda la funcionalidad 

const app = express()

app.use(cors())

app.set("port", 5000);


/* Routes */
app.use("/api/categorias", categoriasRoutes)


export default app