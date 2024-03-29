import { FC } from 'react'
import { AppDataBanner } from '../../../types/app-data-banner'
import DataBanner from './DataBanner'

interface DataBannersProps {
  data: AppDataBanner[]
}

const DataBanners: FC<DataBannersProps> = ({ data }) => {
  
  return (
    <div className='flex justify-between items-center'>
      <DataBanner
        word={'members'}
        number={'39k+'}
        href={'/dashboard/experts'}
        className='border-3 border-teal-300 shadow-md hover:bg-teal-100 hover:border-teal-100'
      />
      <DataBanner
        word={'experts'}
        number={'5k+'}
        href={'/dashboard/experts'}
        className='bg-teal-300 hover:bg-teal-400 shadow-md'
      />
      <DataBanner
        word={'services'}
        number={'9k+'}
        href={'/dashboard/services'}
        className='border-3 border-teal-300 hover:bg-teal-100 hover:border-teal-100 shadow-md'
      />
      <DataBanner
        word={'reviews'}
        number={'21k+'}
        href={'/dashboard/services'}
        className='bg-teal-300 hover:bg-teal-400 shadow-md'
      />
    </div>
  )
}

export default DataBanners
