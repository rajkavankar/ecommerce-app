import mongoose from "mongoose"
import { config } from "./config.js"

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI)
    console.log(`Database conneted ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
