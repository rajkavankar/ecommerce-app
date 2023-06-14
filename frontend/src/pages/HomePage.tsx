import products from "../products"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
  return (
    <div>
      <div className='mx-auto grid  w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
        {products.map((product) => (
          <div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
