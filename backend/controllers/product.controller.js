import Product from "../models/product.model.js"
import { asyncHandler } from "../helpers/asyncHandler.js"
import { CustomError } from "../helpers/CustomError.js"

// @desc   Get all Products
// @path GET /api/products
// @access PRIVATE
const getProducts = asyncHandler(async (_req, res) => {
  const products = await Product.find({})

  if (!products) {
    throw new CustomError("Something went wrong", 400)
  }

  res.status(200).json({
    success: true,
    products,
  })
})

// @desc   Get a single product by id
// @path GET /api/products/:id
// @access PRIVATE
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    throw new CustomError("resource not found ", 404)
  }
  res.status(200).json({
    success: true,
    product,
  })
})

export { getProducts, getProductById }
