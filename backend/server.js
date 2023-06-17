import app from "./app.js"
import { config } from "./config/config.js"
import { ConnectDB } from "./config/DB.js"

const { NODE_ENV, PORT } = config

// Database connection
ConnectDB()

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`)
)
