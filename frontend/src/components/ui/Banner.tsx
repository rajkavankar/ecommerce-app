import { FC, ReactNode } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from "lucide-react"

const bannerVariants = cva("rounded-md border-l-4 m-px p-4", {
  variants: {
    variant: {
      default: "border-blue-500 bg-blue-100 text-blue-600",
      success: "border-green-500 bg-green-100 text-green-600",
      danger: "border-red-500 bg-red-100 text-red-600",
      warning: "border-yellow-500 bg-yellow-100 text-yellow-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface BannerProps extends VariantProps<typeof bannerVariants> {
  message?: string | ReactNode
  className?: string | string[]
  closable?: boolean
}

const Banner: FC<BannerProps> = ({ message, variant, className, closable }) => {
  return (
    <div className={cn(bannerVariants({ variant, className }))}>
      <div className='flex items-center justify-between space-x-4'>
        <div>
          {variant === "default" ? (
            <Info className='h-6 w-6' />
          ) : variant === "success" ? (
            <CheckCircle className='h-6 w-6' />
          ) : variant === "danger" ? (
            <AlertTriangle className='h-6 w-6' />
          ) : variant === "warning" ? (
            <AlertCircle className='h-6 w-6' />
          ) : null}
        </div>
        <div>
          <p className='text-sm font-medium'>{message}</p>
        </div>
        {closable ? (
          <div>
            <X className='h-6 w-6 cursor-pointer' />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

Banner.defaultProps = {
  variant: "default",
  closable: false,
}

export default Banner
