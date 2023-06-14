import { Star, StarHalf } from "lucide-react"

interface Ratings {
  rating: number
  text?: string
}

const FullStar = () => {
  return <Star fill='#F4BE2C' strokeWidth={1} stroke='#F4BE2C' />
}

const HalfStar = () => {
  return <StarHalf fill='#F4BE2C' strokeWidth={1} stroke='#F4BE2C' />
}

const RegStar = () => {
  return <Star strokeWidth={2} stroke='#F4BE2C' />
}

const Rating = ({ rating, text }: Ratings) => {
  return (
    <div className='my-3 flex items-center justify-normal'>
      <span>
        {rating >= 1 ? (
          <FullStar />
        ) : rating >= 0.5 ? (
          <HalfStar />
        ) : (
          <RegStar />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FullStar />
        ) : rating >= 1.5 ? (
          <HalfStar />
        ) : (
          <RegStar />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FullStar />
        ) : rating >= 2.5 ? (
          <HalfStar />
        ) : (
          <RegStar />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FullStar />
        ) : rating >= 3.5 ? (
          <HalfStar />
        ) : (
          <RegStar />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FullStar />
        ) : rating >= 4.5 ? (
          <HalfStar />
        ) : (
          <RegStar />
        )}
      </span>
      <span>
        <p className='pl-3'>{text && text}</p>
      </span>
    </div>
  )
}

export default Rating
