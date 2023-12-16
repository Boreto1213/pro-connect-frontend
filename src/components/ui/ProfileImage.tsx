import { FC } from 'react'
import { Icons } from '../Icons'
import { cn } from '../../lib/utils'

type ImageSize = 'sm' | 'md' | 'xxl'

interface ProfileImageProps {
  imageUrl?: string
  size: ImageSize
}

const ProfileImage: FC<ProfileImageProps> = ({ imageUrl, size }) => {
  return (
    <>
      {imageUrl ? (
        <div
          className={cn('rounded-full overflow-hidden', {
            'w-7 h-7': size === 'sm',
            'w-11 h-11': size === 'md',
            'w-40 h-40 flex-shrink-0': size === 'xxl',
          })}
        >
          <img
            src={imageUrl}
            alt='Your profile picture'
            className={cn('object-cover', {
              'w-7 h-7': size === 'sm',
              'w-11 h-11': size === 'md',
              'w-40 h-40': size === 'xxl',
            })}
          />
        </div>
      ) : (
        <div
          className={cn(
            'flex justify-center items-center rounded-full border-gray-300 bg-gray-100',
            {
              'w-7 h-7 border-1': size === 'sm',
              'w-11 h-11 border-2': size === 'md',
              'w-40 h-40 border-5': size === 'xxl',
            }
          )}
        >
          <Icons.User
            className={cn('text-gray-600', {
              'w-4 h-4': size === 'sm',
              'w-7 h-7': size === 'md',
              'w-20 h-20 flex-shrink-0': size === 'xxl',
            })}
          />
        </div>
      )}
    </>
  )
}

export default ProfileImage
