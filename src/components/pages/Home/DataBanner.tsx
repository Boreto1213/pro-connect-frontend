import { FC, HTMLProps } from 'react'
import { Icons } from '../../Icons'
import { Link } from 'react-router-dom'
import { cn } from '../../../lib/utils'

interface DataBannerProps extends HTMLProps<HTMLDialogElement> {
  word: string
  number: string
  href: string
}

const DataBanner: FC<DataBannerProps> = ({ word, number, href, className }) => {
  return (
    <Link to={href}>
      <div
        className={cn(
          `relative h-[280px] w-[280px] rounded-lg transition-all transform hover:scale-110`,
          className
        )}
      >
        <Icons.ChevronsRight className='absolute top-3 right-3 w-14 h-14' />
        <div className='absolute left-7 bottom-7'>
          <div className='text-6xl'>{number}</div>
          <div className='text-base'>{word}</div>
        </div>
      </div>
    </Link>
  )
}

export default DataBanner
