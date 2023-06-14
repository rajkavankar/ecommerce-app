import { useState } from "react"
import products from "../products"
import { useParams } from "react-router-dom"
import { Button } from "../components/ui/button"
import Rating from "../components/Rating"
import { Product } from "../interfaces/Product"
import { Badge } from "../components/ui/badge"

const ProductPage = () => {
  const { id: productId } = useParams()
  const [count, setCount] = useState<number>(1)
  const product: Product = products.find((p) => p._id === Number(productId))
  return (
    <div className='mx-auto max-w-7xl px-4 md:px-8 2xl:px-16'>
      <div className='block grid-cols-12 items-center gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20'>
        <section className='col-span-6 grid grid-cols-2 gap-2.5'>
          <div className='flex items-center justify-center'>
            <img
              src={product?.image}
              alt={product?.name}
              className='w-full object-contain'
            />
          </div>
        </section>
        <section className='col-span-6 pt-8 lg:pt-0'>
          <div className='mb-7 border-b border-gray-300 pb-7'>
            <h2 className='text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl'>
              {product?.name}
              <p>
                {product.countInStock < 1 ? (
                  <Badge className='bg-red-600'>Out of Stock</Badge>
                ) : (
                  <Badge className='bg-green-600'>Available</Badge>
                )}
              </p>
            </h2>
            <p className='text-body text-sm leading-6  lg:text-base lg:leading-8'>
              {product?.description}
            </p>
            <div className='mt-5 flex items-center '>
              <div className='text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl'>
                ${product?.price}
              </div>
              {/* <span className='font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl'>
                $50.00
              </span> */}
            </div>
            <Rating
              rating={product.rating}
              text={`${product?.numReviews} reviews`}
            />
          </div>

          <div className='space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32'>
            <div className='group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12'>
              <button
                className='text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12'
                disabled>
                +
              </button>
              <span className='duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24'>
                1
              </span>
              <button className='text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12'>
                -
              </button>
            </div>

            <Button className='h-11 w-full'>Add to cart</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage
