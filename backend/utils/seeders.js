import mongoose from "mongoose"
import { config } from "../config/config.js"
import users from "../data/users.js"
import products from "../data/products.js"
import Users from "../models/user.model.js"
import Products from "../models/product.model.js"
import Orders from "../models/order.model.js"
import { ConnectDB } from "../config/DB.js"

ConnectDB()

const importData = async () => {
  try {
    await Users.deleteMany()
    await Products.deleteMany()
    await Orders.deleteMany()

    const createdUsers = await Users.insertMany(users)

    const adminUser = createdUsers[0]._id

    const insertProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Products.insertMany(insertProducts)

    console.log("Data inserted")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

const destroyData = async () => {
  try {
    await Users.deleteMany()
    await Products.deleteMany()
    await Orders.deleteMany()
    console.log("Data deleted")
  } catch (error) {
    console.log(error)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
}
if (process.argv[2] === "-i") {
  importData()
}
