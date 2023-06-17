import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import axios from "axios"
import { Product } from "../interfaces/Product"

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_SERVER_URL + "/products"
        )
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <div className='mx-auto grid  w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4'>
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
