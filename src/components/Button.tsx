import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '../lib/utils'
import { Loader2 } from 'lucide-react'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-teal-500 text-white hover:bg-teal-600',
        ghost: 'bg-transparent text-teal-700 hover:bg-slate-200',
      },
      size: {
        sm: 'h-9 px-2',
        default: 'h-10 py-2 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  )
}

export default Button
