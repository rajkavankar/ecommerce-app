import ProductCard from "../components/ProductCard"
import { ClipLoader } from "react-spinners"
import { useGetProductsQuery } from "../features/productSlice"
import { Product } from "../interfaces/Product"
import Banner from "../components/ui/Banner"

const HomePage = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery()

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
        <div className='mx-auto grid  w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
          {products?.products?.map((product: Product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage
