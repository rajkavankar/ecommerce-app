import { useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../components/ui/button"
import Rating from "../components/Rating"
import { ClipLoader } from "react-spinners"
import { Badge } from "../components/ui/badge"

import { useGetProductByIdQuery } from "../features/productSlice"
import Banner from "../components/ui/Banner"

type productParams = {
  id?: string
}

const ProductPage = () => {
  const { id: productId } = useParams<productParams>()
  const [count, setCount] = useState<number>(1)
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId)

  const increaseCount = () => {
    if (count < 5) {
      setCount((value) => value + 1)
    }
  }

  const decreaseCount = () => {
    if (count > 1) {
      setCount((value) => value - 1)
    }
  }

  return (
    <div>
      {isLoading ? (
        <div className='flex h-screen items-center justify-center'>
          <ClipLoader />
        </div>
      ) : isError ? (
        <>
          <Banner variant='danger' message='Something went wrong' />
        </>
      ) : (
        <div className='mx-auto max-w-7xl px-4 md:px-8 2xl:px-16'>
          <div className='block grid-cols-12 items-center gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20'>
            <section className='col-span-6 grid grid-cols-2 gap-2.5'>
              <div className='flex items-center justify-center'>
                <img
                  src={product?.product.image}
                  alt={product?.product.name}
                  className='w-full object-contain'
                />
              </div>
            </section>
            <section className='col-span-6 pt-8 lg:pt-0'>
              <div className='mb-7 border-b border-gray-300 pb-7'>
                <h2 className='text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl'>
                  {product?.product.name}
                  <p>
                    {product?.product.countInStock ?? 0 < 1 ? (
                      <Badge className='bg-red-600'>Out of Stock</Badge>
                    ) : (
                      <Badge className='bg-green-600'>Available</Badge>
                    )}
                  </p>
                </h2>
                <p className='text-body text-sm leading-6  lg:text-base lg:leading-8'>
                  {product?.product.description}
                </p>
                <div className='mt-5 flex items-center '>
                  <div className='text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl'>
                    ${product?.product.price}
                  </div>
                  {/* <span className='font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl'>
                $50.00
              </span> */}
                </div>
                <Rating
                  rating={product?.product.rating ?? 0}
                  text={`${product?.product.numReviews} reviews`}
                />
              </div>

              {product?.product.countInStock ?? 0 < 1 ? (
                <Banner message='Product is out of stock' />
              ) : (
                <div className='space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32'>
                  <div className='group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12'>
                    <button
                      className='text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12'
                      onClick={increaseCount}>
                      +
                    </button>
                    <span className='duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24'>
                      {count}
                    </span>
                    <button
                      className='text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12'
                      onClick={decreaseCount}>
                      -
                    </button>
                  </div>

                  <Button className='h-11 w-full'>Add to cart</Button>
                </div>
              )}
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
