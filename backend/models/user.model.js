import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } else {
    return next()
  }
})

userSchema.methods = {
  comparePassword: async function (password) {
    return await bcrypt.compare(password, this.password)
  },
  getJwtToken: function () {
    return jwt.sign({ id: this._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRY,
    })
  },
}

export default mongoose.model("User", userSchema)
