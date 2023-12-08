import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { cn } from '../lib/utils'

interface PaginationProps {
  url: string
  currentPage: number
  totalPages: number
}

const Pagination: FC<PaginationProps> = ({currentPage, totalPages, url}) => {
  return (
    <div className='w-full flex justify-center gap-1 mt-5'>
      {currentPage > 1 ? (
        <>
          <Link to={`${url}1`}>
            <Button variant={'ghost'}>First</Button>
          </Link>
          <Link to={`${url}${currentPage - 1}`}>
            <Button variant={'ghost'}>Prev</Button>
          </Link>
        </>
      ) : null}
      {totalPages
        ? Array.from({ length: totalPages }).map((_, indx) => (
            <Link key={indx} to={`${url}${indx + 1}`}>
              <Button
                className={cn('text-md', {
                  'bg-gray-100': currentPage === indx + 1,
                })}
                variant={'ghost'}
              >
                {indx + 1}
              </Button>
            </Link>
          ))
        : null}
      {totalPages && currentPage < totalPages ? (
        <>
          <Link to={`${url}${currentPage + 1}`}>
            <Button variant={'ghost'}>Next</Button>
          </Link>
          <Link to={`${url}${totalPages}`}>
            <Button variant={'ghost'}>Last</Button>
          </Link>
        </>
      ) : null}
    </div>
  )
}

export default Pagination
