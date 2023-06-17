import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin user",
    email: "admin@estore.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Test user",
    email: "user@estore.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Sample user",
    email: "sample@estore.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
]

export default users
