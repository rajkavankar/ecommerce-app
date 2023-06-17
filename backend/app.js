import express from "express"
import swaggerUi from "swagger-ui-express"
import { swaggerDocument } from "./swagger.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/index.js"
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

// Routes
app.use("/api", routes)

// Documentation setup
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// 404 Route not found
app.use("*", (_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

export default app
