import Rating from "./Rating"
import { Button } from "./ui/button"
import { Product } from "../interfaces/Product"
import { Link } from "react-router-dom"

interface productCard {
  product: Product
}

const ProductCard = ({ product }: productCard) => {
  return (
    <div className='w-full rounded-md border bg-white shadow-lg'>
      <img
        src={product.image}
        alt='Laptop'
        className='h-[200px] w-full rounded-t-md object-cover'
      />
      <div className='p-4'>
        <h1 className=' inline-flex  items-center  text-lg font-semibold'>
          {product.name}
        </h1>
        <h1 className=' text-lg '>$ {product.price}</h1>
        <Rating
          rating={product.rating}
          text={`${product.numReviews} reviews`}
        />
        <Button asChild className='mb-2'>
          <Link to={`/product/${product._id}`}>View Product</Link>
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
